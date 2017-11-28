import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  bottles:number = 0;
  price:number = 0;
  constructor() { }

  buyItem(item: any): void {
    this.bottles++;
    this.price++;
  }

  getCart(): [number] {
    return [this.bottles, this.price];
  }
}
