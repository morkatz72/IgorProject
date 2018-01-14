import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddOrUpdateProductComponent } from './add-or-update-product/add-or-update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list/products-list.component'
import { PagerService } from './products-list/pager.service';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    AddOrUpdateProductComponent,
    DeleteProductComponent,
    ProductsListComponent,
    PaginationComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ProductService, PagerService],
  exports: [ProductDetailsComponent, AddOrUpdateProductComponent, DeleteProductComponent, ProductsListComponent, PaginationComponent]
})
export class ProductModule { }
