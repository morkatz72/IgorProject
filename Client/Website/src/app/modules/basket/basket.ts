import { BasketItemModule } from './basket-item.module';


export class Basket {
  basketItems: BasketItemModule[];
  basketId: number;
  totalPrice: number;
}
