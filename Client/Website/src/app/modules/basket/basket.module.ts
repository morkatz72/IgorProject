import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketService } from '../../services/basketService/basket-service.service';
import { BasketPageComponent } from './basket-page/basket-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BasketService],
  declarations: [BasketPageComponent]
})
export class BasketModule { }
