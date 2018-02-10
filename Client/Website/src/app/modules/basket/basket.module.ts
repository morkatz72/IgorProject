import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketService } from '../../services/basketService/basket-service.service';
import { BasketPageComponent } from './basket-page/basket-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasketHandleService} from './basket.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BasketService, BasketHandleService],
  declarations: [BasketPageComponent]
})
export class BasketModule { }
