import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private count = 0;
  private count1 = 0;
  private count2 = 0;
  private count3 = 0;

  constructor() { }

  setCount(val){
    this.count = val;
  }
  getCount(){
    return this.count;
  }
  setCount1(val){
    this.count1 = val;
  }
  getCount1(){
    return this.count1;
  }
  setCount2(val){
    this.count2 = val;
  }
  getCount2(){
    return this.count2;
  }
  setCount3(val){
    this.count3 = val;
  }
  getCount3(){
    return this.count3;
  }
}
