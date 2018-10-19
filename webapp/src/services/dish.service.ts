import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES), 2000);
    })
  }

  getDish(id: string): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    })
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    })
  }
}
