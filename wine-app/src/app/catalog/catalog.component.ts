import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: [
    './catalog.component.css',
    './media_catalog.component.css'
  ]
})
export class CatalogComponent implements OnInit {

  items;
  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.dataService.getAllWines()
    .subscribe(
      items => this.items = items
    );
  }

  buy(item: Array<any>) {
    this.cartService.buyItem(item);
  }


}
