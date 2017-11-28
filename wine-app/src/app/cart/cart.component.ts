import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [
    './cart.component.css',
    './media_cart.component.css'
  ]
})
export class CartComponent implements OnInit {

  price = '0';
  bottles = 0;
  cart: [number, string] = [0, '0'];

  constructor(private cartService: CartService ) {}

  update() {
    this.cart = this.cartService.getCart();
    this.bottles = this.cart[0];
    this.price = this.cart[1];

  }

  ngOnInit() {
      this.cartService.initCartComponent(this);
      this.update();
  }





}
