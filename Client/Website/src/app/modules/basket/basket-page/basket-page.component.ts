import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BasketItemModule } from '../basket-item.module';
import { CurrencyPipe } from '@angular/common';
import { BasketService } from '../../../services/basketService/basket-service.service';
import { Basket } from '../basket';
import { BasketHandleService } from '../basket.service';
import { ActivatedRoute } from '@angular/router';


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

    constructor(private basketService: BasketService,
      private basketHandleService: BasketHandleService,
      private router: Router,
      private route: ActivatedRoute) { }


    removeItem(index: number) {
      debugger;
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
    if (this.basket.id) {
      this.basket.basketId = 0;
    }

    this.basketHandleService.saveBasket(this.basket).subscribe((results) => {
      debugger;
      alert('הסל נשמר בהצלחה');
      this.basket.basketId = 6;
    })
  }
    ngOnInit() {
      this.basket = new Basket();

      this.route.params.subscribe(params => {
        let id: number = +params['id'];
        if (id) {
          this.getBasket(id);

        }
      })
    }


    getBasket(basketId: number): any {
      debugger;
      this.basketHandleService.getBasket(basketId).subscribe(
        (data) => {
          this.basket = data[0];
          if (this.basket) {
            this.basketItems = this.basket.basketItems;
            localStorage.setItem("basket", JSON.stringify(this.basketItems));

          } else
          {
            this.router.navigateByUrl('/page-404');
          }
        }
      );
    }
}
