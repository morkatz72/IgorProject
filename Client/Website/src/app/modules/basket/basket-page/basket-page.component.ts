import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BasketItemModule } from '../basket-item.module';
import { CurrencyPipe } from '@angular/common';
import { BasketService } from '../../../services/basketService/basket-service.service';
import { Basket } from '../basket';
import { BasketHandleService} from '../basket.service';

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

    constructor(private basketService: BasketService, private basketHandleService: BasketHandleService) { }


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

    this.basketHandleService.saveBasket(this.basket).subscribe((results) => {
    })
  }
    ngOnInit() {
      this.basket = new Basket();
    }

}
