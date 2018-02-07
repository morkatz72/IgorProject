import { Injectable } from '@angular/core';
import { Product } from "../../shared/entities/Product";
import { BasketItemModule } from "../../modules/basket/basket-item.module";

@Injectable()
export class BasketService {
    constructor() { }

    getBasket(): BasketItemModule[] {
        return JSON.parse(localStorage.getItem("basket"));
    }

    setBasket(basket: BasketItemModule[]) {
        localStorage.setItem("basket", JSON.stringify(basket));
    }

    addItem(product: Product) {
        let tmpBasket: BasketItemModule[] = JSON.parse(localStorage.getItem("basket"));
        let index = tmpBasket.map((i) => i.id).indexOf(product.id)
        if (index != -1)
            tmpBasket[index].amount += 1;
        else
            tmpBasket.push(new BasketItemModule(product.id, product.name, "", product.price, 1));

        localStorage.setItem("basket", JSON.stringify(tmpBasket));
    }

    removeItem(product: Product) {
        let tmpBasket: BasketItemModule[] = JSON.parse(localStorage.getItem("basket"));
        let index = tmpBasket.map((i) => i.id).indexOf(product.id)
        if (index != -1)
            tmpBasket[index].amount -= 1;
        else
            tmpBasket.splice(index, 1);

        localStorage.setItem("basket", JSON.stringify(tmpBasket));
    }

    removeItemIndex(index: number) {
        let tmpBasket: BasketItemModule[] = JSON.parse(localStorage.getItem("basket"));
        tmpBasket.splice(index, 1);

        localStorage.setItem("basket", JSON.stringify(tmpBasket));
    }

    setItemAmount(productID: number, amount: number) {
        let tmpBasket: BasketItemModule[] = JSON.parse(localStorage.getItem("basket"));

        let index = tmpBasket.map((i) => i.id).indexOf(productID)
        console.log(index);
        if (index != -1)
            tmpBasket[index].amount = amount;

        localStorage.setItem("basket", JSON.stringify(tmpBasket));
    }
}
