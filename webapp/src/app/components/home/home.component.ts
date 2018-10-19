import { Component, OnInit } from '@angular/core';
import { DishService } from '../../../services/dish.service';
import { PromotionService } from '../../../services/promotion.service';
import { Dish } from '../../../models/dish';
import { Promotion } from '../../../models/promotion';
import { LeaderService } from '../../../services/leader.service';
import { Leader } from '../../../models/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;//assignment 2 - task 2

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    //assignment 2 - task 2
    private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish);
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader);
  }

}