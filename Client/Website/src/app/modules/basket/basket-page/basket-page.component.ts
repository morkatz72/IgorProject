import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BasketItemModule } from '../basket-item.module';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {
  basketItems: BasketItemModule[] = [
    new BasketItemModule("מעדן חלב מילקי 125 מ\"ל",
      "https://www.osem.co.il/tm-content/uploads/2015/01/Bamba_classic_80g3.png3-308x308.png",
      3.70,
      2),
    new BasketItemModule("במבה אסם 50 גרם",
      "https://www.strauss-group.co.il/wp-content/blogs.dir/1/files/Milky_shokolad_446x302.jpg",
      5.20,
      3),
  ];

  getTotalPrice() {
    var totalPrice: number = 0;
    for (var i = 0; i < this.basketItems.length; i++) {
      totalPrice += this.basketItems[i].price * this.basketItems[i].amount;
    }
    return totalPrice;
  }

  constructor() { }

  ngOnInit() {
  }

}
