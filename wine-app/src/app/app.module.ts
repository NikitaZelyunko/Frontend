import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { WineItemComponent } from './wine-item/wine-item.component';

import { DataService } from './data.service';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    WineItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
