import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketService} from './basket.service';
import { BasketPageComponent } from './basket-page/basket-page.component'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [BasketService],
  declarations: [BasketPageComponent]
})
export class BasketModule { }
