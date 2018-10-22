import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

//Assignment 3 - Task 2
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dish } from "src/models/dish";
import { Comment } from "src/models/comment";
import { DishService } from "src/services/dish.service";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  //@Input()
  //dish: Dish;

  //constructor() { }

  //ngOnInit() {
  //}

  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;
//Assignment 3 - Task 2
  commentsForm: FormGroup;
  comment: Comment;

  formErrors = {
    'rating': '',
    'comment': '',
    'author': '',
    'date': ''
  };

  validationMessages = {
    'comment': {
      'required': 'Comment is required.',
      'minlength': 'Comment must be at least 2 characters long.',
      'maxlength': 'Comment cannot be more than 500 characters long.'
    },
    'author': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 2 characters long.',
      'maxlength': 'Name cannot be more than 25 characters long.'
    },
  };

  constructor(
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    //Assignment 3 - Task 2
    private fb: FormBuilder) { }

  ngOnInit() {
    this.dish = null;

    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);

    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = params['id'];
        this.dishservice.getDish(id)
            .subscribe(dish => this.dish = dish);
      } 
    });
    this.createForm();
  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  //Assignment 3 - Task 2
  createForm() {
    this.commentsForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: 5,
      //date: new Date().toISOString()
    });

    this.commentsForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.commentsForm) { return; }

    const form = this.commentsForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';

      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

    //validation is done in html
    this.comment = /*(form.valid) ? */form.value/* : null*/;
  }

  onSubmit() {
    this.comment = this.commentsForm.value;
    console.log(this.comment);

    this.comment.date = new Date().toISOString();//Assignment 3 - Task 3
    this.dish.comments.push(this.comment);

    this.commentsForm.reset({
      comment: '',
      author: '',
      rating: 5,
      //date: new Date().toISOString()
    });
  }

}
