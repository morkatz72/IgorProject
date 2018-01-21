import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../../shared/entities/Product';
import { Category } from '../../../shared/entities/Category';
import { EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  loading = false;
  total = 0;
  page = 1;
  limit = 2;
  public products: Product[];
  public productPaging: Product[]
  public categories: Category[];
  select: EventEmitter<string>;



  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
    this.getProductsPaging();
    this.getCategories();
  }

  getProducts(): any {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = Product.toProduct(data);
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
    console.log(value);
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
}
