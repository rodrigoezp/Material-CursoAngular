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
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader = this.leaderService.getFeaturedLeader();//assignment 2 - task 2
  }

}