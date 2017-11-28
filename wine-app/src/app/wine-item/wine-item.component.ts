import { Component, OnInit } from '@angular/core';

import { Wine } from '../wine';

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css']
})



export class WineItemComponent implements OnInit {

  item = {};
  constructor() { }

  ngOnInit() {
  }

  buy(): void {
  }

}
