import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class BasketItemModule {
  public name: string;
  public image: string;
  public price: number;
  public amount: number;

  constructor(name: string, image: string, price: number, amount: number) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.amount = amount;
  }
}
