import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';
import { HttpClient } from "@angular/common/http";
import { baseURL } from "src/shared/baseurl";
import { ProcessHTTPMsgService } from "src/services/processhttpmsg.service";
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList()
   .pipe(catchError (error => { return this.processHTTPMsgService.handleError(error); }));
  }

  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get()
   .pipe(catchError (error => { return this.processHTTPMsgService.handleError(error); }));;
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({ featured: true })
      .pipe(map(dishes => dishes[0]))
   .pipe(catchError (error => { return this.processHTTPMsgService.handleError(error); }));
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .pipe(map(dishes => { return dishes.map(dish => dish.id) }))
   .pipe(catchError (error => { return this.processHTTPMsgService.handleError(error); }));
  }

  saveDish(dish: any) {
    return dish.save() //this.restangular.save('dishes', dish.id).get()
   .pipe(catchError (error => { return this.processHTTPMsgService.handleError(error); }));
  }
}
