/// <reference path="../modules/basket/basket-page/basket-page.component.ts" />
/// <reference path="../modules/basket/basket-page/basket-page.component.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from '../modules/login/user-login-component/user-login.component';
import { RegisterUserComponent } from '../modules/login/register-user/register-user.component';

import { ProductDetailsComponent } from '../modules/product/product-details/product-details.component';
import { AddOrUpdateProductComponent } from '../modules/product/add-or-update-product/add-or-update-product.component';
import { DeleteProductComponent } from '../modules/product/delete-product/delete-product.component';
import { ProductsListComponent } from '../modules/product/products-list/products-list.component';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { AdvertisementComponent} from '../modules/advertising/advertisement/advertisement.component'
import { AppComponent } from '../app.component'
import { BasketPageComponent } from '../modules/basket/basket-page/basket-page.component';
import { CheapestProdctByCategoryComponent } from '../modules/product/cheapest-prodct-by-category/cheapest-prodct-by-category.component';
import { PriceHistoryChartComponent } from '../modules/product/price-history-chart/price-history-chart.component';
import { ProductStunningGraphComponent } from '../modules/product/product-stunning-graph/product-stunning-graph.component';
import { ErrorPageComponent} from '../components/error-page/error-page.component'

export const routes: Routes = [

  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'add-or-update-product', component: AddOrUpdateProductComponent },
  { path: 'add-or-update-product/:id', component: AddOrUpdateProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'product-list', component: ProductsListComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'advertisement', component: AdvertisementComponent },
  { path: 'basket', component: BasketPageComponent },
  { path: 'basket/:id', component: BasketPageComponent },
  { path: 'cheapest-product', component: CheapestProdctByCategoryComponent },
  { path: 'history-one', component: PriceHistoryChartComponent },
  { path: 'history-one/:id', component: PriceHistoryChartComponent },
  { path: 'history-two', component: ProductStunningGraphComponent },
  { path: 'page-404', component: ErrorPageComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
