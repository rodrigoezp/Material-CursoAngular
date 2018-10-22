import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../models/leader';
import { ProcessHTTPMsgService } from "src/services/processhttpmsg.service";
import { Restangular } from "ngx-restangular";

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders', id).get()
   .pipe(catchError (error => { return this.processHTTPMsgService.handleError(error); }));
  }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList()
   .pipe(catchError (error => { return this.processHTTPMsgService.handleError(error); }));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({ featured: true }).pipe(
      map(leaders => leaders[0])
    )
   .pipe(catchError (error => { return this.processHTTPMsgService.handleError(error); }));
  }

}
