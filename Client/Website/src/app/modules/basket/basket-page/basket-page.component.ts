import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BasketItemModule } from '../basket-item.module';
import { CurrencyPipe } from '@angular/common';
import { BasketService } from '../../../services/basketService/basket-service.service';
import { Basket} from '../basket';

@Component({
    selector: 'app-basket-page',
    templateUrl: './basket-page.component.html',
    styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {
    basketItems: BasketItemModule[] = this.basketService.getBasket();
    basket: Basket;
    getTotalPrice() {
        var totalPrice: number = 0;
        for (var i = 0; i < this.basketItems.length; i++) {
            totalPrice += this.basketItems[i].price * this.basketItems[i].amount;
        }
        return totalPrice;
    }

    removeItem(index: number) {
        this.basketService.removeItemIndex(index);
        this.basketItems = this.basketService.getBasket()
    }

    emptyBasket() {
        this.basketService.setBasket([]);
        this.basketItems = this.basketService.getBasket()
    }

    setItemAmount(productId: number, amount: number) {
      this.basketService.setItemAmount(productId, amount);
    }

  saveBasket() {
    this.basket.basketItems = this.basketItems;
    this.basket.totalPrice = this.getTotalPrice();
    this.basket.basketId = 0;
  }
    
    constructor(private basketService : BasketService) { }

    ngOnInit() {
      this.basket = new Basket();
      //this.basketItems = JSON.parse(localStorage.getItem("basket"));

      //if (this.basketItems.length == 0) {
      //    this.basketItems.push(new BasketItemModule(
      //        4,
      //        "במבה אסם 50 גרם",
      //        "https://www.strauss-group.co.il/wp-content/blogs.dir/1/files/Milky_shokolad_446x302.jpg",
      //        5.20,
      //        3));
      //    this.basketItems.push(new BasketItemModule(
      //        5,
      //        "מעדן חלב מילקי 125 מ\"ל",
      //        "https://www.osem.co.il/tm-content/uploads/2015/01/Bamba_classic_80g3.png3-308x308.png",
      //        3.70,
      //        2));
      //}
    }

}
