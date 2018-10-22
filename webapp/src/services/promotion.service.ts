import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Promotion } from '../models/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Restangular } from 'ngx-restangular';
import { ProcessHTTPMsgService } from "src/services/processhttpmsg.service";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

   constructor(
    private processHTTPMsgService: ProcessHTTPMsgService,
    private restangular: Restangular) { }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList()
   .pipe(catchError (error => { return this.processHTTPMsgService.handleError(error); }));
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotions', id).get()
   .pipe(catchError (error => { return this.processHTTPMsgService.handleError(error); }));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({ featured: true })
    .pipe(map (promotions => promotions[0]))
   .pipe(catchError (error => { return this.processHTTPMsgService.handleError(error); }));
  }
}
