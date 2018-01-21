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

export const routes: Routes = [

  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'add-or-update-product', component: AddOrUpdateProductComponent },
  { path: 'add-or-update-product/:id', component: AddOrUpdateProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'product-list', component: ProductsListComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'advertisement' , component: AdvertisementComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
