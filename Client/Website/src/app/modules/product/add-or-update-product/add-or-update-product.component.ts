import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../../shared/entities/Product';
import { Category } from '../../../shared/entities/Category';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-or-update-product',
  templateUrl: './add-or-update-product.component.html',
  styleUrls: ['./add-or-update-product.component.css']
})
export class AddOrUpdateProductComponent implements OnInit {
  public product: Product;
  public categories: Category[];
  select: EventEmitter<string>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();
    this.getCategories();
    this.select = new EventEmitter();
  }

  selectItem(value) {
    this.select.emit(value);
    console.log(value);
    this.product.category = +value;
  }

  getCategories() {
    this.productService.getCategories().subscribe((results) => {
      this.categories = Category.toCategories(results);
      console.log(this.categories);
    })
  }

  onSubmit(f: any, event: Event) {
    this.saveProduct();
  }

  saveProduct() {
    this.product.calories = +this.product.calories;
    this.product.price = +this.product.price;
    this.productService.saveProduct(this.product).subscribe((results) => {
    })
  }
}
