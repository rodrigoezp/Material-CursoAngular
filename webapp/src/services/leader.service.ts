import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../models/leader';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeader(id: number): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
    })
  }

  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS), 2000);
    })
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    })
  }

}
