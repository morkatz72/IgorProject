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
import { Pipe, PipeTransform } from '@angular/core';
import { CategoryPipe } from './pipes/category-pipe/category.pipe';
import { PricePipe } from './pipes/price-pipe/price.pipe';
import { NamePipe } from './pipes/name-pipe/name.pipe';
import { CheapestProdctByCategoryComponent } from './cheapest-prodct-by-category/cheapest-prodct-by-category.component';
import { PriceHistoryChartComponent } from './price-history-chart/price-history-chart.component';
import { ProductStunningGraphComponent } from './product-stunning-graph/product-stunning-graph.component';
import { PriceHistoryChartWithD3jsComponent } from './price-history-chart-with-d3js/price-history-chart-with-d3js.component';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    AddOrUpdateProductComponent,
    DeleteProductComponent,
    ProductsListComponent,
    PaginationComponent,
    CategoryPipe,
    PricePipe,
    NamePipe,
    CheapestProdctByCategoryComponent,
    PriceHistoryChartComponent,
    ProductStunningGraphComponent,
    PriceHistoryChartWithD3jsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ProductService, PagerService],
  exports: [ProductDetailsComponent, AddOrUpdateProductComponent, DeleteProductComponent, ProductsListComponent, PaginationComponent]
})
export class ProductModule { }
