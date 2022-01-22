import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  data1 = 0;

  constructor() {
    this.data1 = Math.random();    
  }

}
