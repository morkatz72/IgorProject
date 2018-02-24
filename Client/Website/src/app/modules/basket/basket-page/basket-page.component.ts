import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BasketItemModule } from '../basket-item.module';
import { CurrencyPipe } from '@angular/common';
import { BasketService } from '../../../services/basketService/basket-service.service';
import { Basket } from '../basket';
import { BasketHandleService } from '../basket.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Store } from '../../../shared/entities/store';
import { Observable } from 'rxjs/Observable';

declare var google;

@Component({
    selector: 'app-basket-page',
    templateUrl: './basket-page.component.html',
    styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {
  basketItems: BasketItemModule[] = this.basketService.getBasket();

  title: string = 'My first AGM project';
  lat: number = 32.678418;
  lng: number = 35.409007;
  public currStore: Store;
  select: EventEmitter<string>;
  stores: Store[];


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
        this.basketService.removeItemIndex(index);
        this.basketItems = this.basketService.getBasket()
    }

    getGeoLocation(address: string) {
      let geocoder = new google.maps.Geocoder();
      debugger;
      geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          //var latlng = google.maps.location.LatLng();

          this.lng = results[0].geometry.location.lng()
          this.lat = results[0].geometry.location.lat()
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }

    emptyBasket() {
        this.basketService.setBasket([]);
        this.basketItems = this.basketService.getBasket()
    }

    selectItem(value) {
      debugger;
      this.select.emit(value);
      console.log(value);
      //this.currStore = value;
      this.getGeoLocation(value);
    }

    setItemAmount(productId: number, amount: number) {
      this.basketService.setItemAmount(productId, amount);
    }

  saveBasket() {
    this.basket.basketItems = this.basketItems;
    this.basket.totalPrice = this.getTotalPrice();
    if (!this.basket.id) {
      this.basket.id = 0;
    }
    if (this.basket.id == 0) {
      this.basketHandleService.saveBasket(this.basket).subscribe((results) => {
        debugger;
        alert('הסל נשמר בהצלחה');
        this.basket.basketId = 6;
      })
    }
    else {
      alert("עלייך לעדכן את הסל")
      this.basketHandleService.updateBasket(this.basket).subscribe((results) => {
      })
    }
  }
    ngOnInit() {
      this.basket = new Basket();
      this.getAllStores();
      this.select = new EventEmitter();

      this.route.params.subscribe(params => {
        let id: number = +params['id'];
        if (id) {
          this.getBasket(id);
        }
      })
    }

    getAllStores() {
      this.basketHandleService.getAllStores().subscribe(
        (data) => {
          this.stores = Store.toStore(data)
        }
      )
    }
    
    getBasket(basketId: number): any {
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
