import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/entities/Product';
import { Category } from '../../../shared/entities/Category';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list-filter',
  templateUrl: './products-list-filter.component.html',
  styleUrls: ['./products-list-filter.component.css']
})
export class ProductsListFilterComponent implements OnInit {
  loading = false; W
  total = 0;
  page = 1;
  limit = 50;
  public name: string;
  public products: Product[];
  public productPaging: Product[];
  public currCategory: number;
  public categories: Category[];
  select: EventEmitter<string>;
  public bigger: string;
  public smaller: string;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.select = new EventEmitter();
    this.name = "";
    this.getProductsPaging();
    this.getCategories();
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
}
