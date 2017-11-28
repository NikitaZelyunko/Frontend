import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';

@Injectable()
export class CartService {

  bottles = 0;
  price = '0';
  cartList: Array<{id: number, item: any, count: number}>= [];
  cartComponent: CartComponent;
  constructor() { }

  buyItem(item): void {
    this.bottles++;
    this.price = (Number(this.price) + Number(item.price.slice(1, item.price.length - 1))).toFixed(2);
    this.addToCartList(item);
    this.cartComponent.update();
  }

  getCart(): [number, string] {
    return [this.bottles, this.price];
  }

  private addToCartList(item): void {
    let index = this.findItemInCartList(item.id);
    if (index !== -1) {
      this.cartList[index].count++;
    }
    else {
      this.cartList.push({id: item.id, item: item, count: 1});
    }
  }

  findItemInCartList(id): number {
    for (let i = 0; i < this.cartList.length; i++) {
      if (this.cartList[i].id === id) {
        return i;
      }
    }
    return -1;
  }

 initCartComponent(cartComponent: CartComponent): void {
 this.cartComponent = cartComponent;
 }
}
