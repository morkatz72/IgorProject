import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../../shared/entities/Product';
import { Category } from '../../../shared/entities/Category';
import { EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { CategoryPipe} from '../pipes/category-pipe/category.pipe';
 


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  loading = false;
  total = 0;
  page = 1;
  limit = 10;
  public products: Product[];
  public productPaging: Product[];
  public currCategory: number;
  public categories: Category[];
  select: EventEmitter<string>;



  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
    this.getProductsPaging();
    this.getCategories();
    this.select = new EventEmitter();
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
}
