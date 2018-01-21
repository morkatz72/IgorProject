import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketService} from './basket.service'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [BasketService],
  declarations: []
})
export class BasketModule { }
