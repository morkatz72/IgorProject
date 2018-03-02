import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../../shared/entities/Product';
import { Category } from '../../../shared/entities/Category';
import { EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { CategoryPipe} from '../pipes/category-pipe/category.pipe';
import { Router } from "@angular/router";
import { BasketItemModule } from "../../basket/basket-item.module";
import * as _ from "lodash";
import { BasketModule } from '../../basket/basket.module';
import { BasketService } from '../../../services/basketService/basket-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  loading = false;
  total = 0;
  page = 1;
  limit = 50;
  public name:string;
  public products: Product[];
  public productPaging: Product[];
  public currCategory: number;
  public categories: Category[];
  select: EventEmitter<string>;
  public productsGroups: Product[][];
  public hoverIndex: number = null;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
    this.getProductsPaging();
    this.getCategories();
    this.select = new EventEmitter();
    this.name = "";
  }

  getProducts(): any {
    this.productService.getProducts().subscribe(
      (data) => {
        debugger;
        this.products = Product.toProduct(data);
        
        this.productsGroups = _.chunk(Product.toProduct(data), 3);

        console.log(this.products);
      }
    );
  }

  getProductsPaging(): void {
    this.loading = true;
    this.productService.getProductsPaging(this.page, this.limit).subscribe(products => {
      this.productPaging = Product.toProduct(products);
      console.log(products);
      this.total = this.products.length - 1;
      this.loading = false;
    });
  }

  selectItem(value) {
    this.select.emit(value);
    this.currCategory = value;
    console.log(this.currCategory);
  }

  getCategories() {
    this.productService.getCategories().subscribe((results) => {
      this.categories = Category.toCategories(results);
      console.log(this.categories);
    })
  }

  goToPage(n: number): void {
    this.page = n;
    this.getProductsPaging();
  }

  onNext(): void {
    this.page++;
    this.getProductsPaging();
  }

  onPrev(): void {
    this.page--;
    this.getProductsPaging();
  }

  userName() {
    return localStorage.getItem('currentUser');
  }

  showDetails(productID: number) {
      this.router.navigate(['/product-details/' + productID]);
  }

  updateOrDelete(productID: number) {
    this.router.navigate(['/add-or-update-product/' + productID]);
  }

  addToBasket(product: Product, input: any) {
    //BasketService.setItemAmountStable(product, +(input.value || 0) + 1);
    BasketService.addItem(product);
  }

  removeFromBasket(productID: number, input: any) {
    BasketService.removeItemByID(productID);
  }

  deleteFromBasket(product: Product, input: any) {
    BasketService.setItemAmountStable(product, 0);
  }

  setItemAmount(productID: number, event: any) {
    BasketService.setItemAmount(productID, event.data);
  }

  getItemAmount(productID: number): any {
    return BasketService.getItemAmount(productID);
  }

  enterCard(i) {
    this.hoverIndex = i;
  }

  leaveCard(i) {
    this.hoverIndex = null;
  }
}
