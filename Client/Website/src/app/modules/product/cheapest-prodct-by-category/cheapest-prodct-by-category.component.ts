import { Component, OnInit } from '@angular/core';
import { Category } from '../../../shared/entities/Category';
import { ProductService } from '../product.service';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-cheapest-prodct-by-category',
  templateUrl: './cheapest-prodct-by-category.component.html',
  styleUrls: ['./cheapest-prodct-by-category.component.css']
})
export class CheapestProdctByCategoryComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public categories: Category[];
  public category: number;
  select: EventEmitter<string>;
  public productId : any;

  ngOnInit() {
    this.select = new EventEmitter();
    this.getCategories();
  }

  getCategories() {
    this.productService.getCategories().subscribe((results) => {
      this.categories = Category.toCategories(results);
      console.log(this.categories);
    })
  }

  selectItem(value) {
    this.select.emit(value);
    this.category = +value;
  }

  chooseTheCheapestProduct() {
    this.productService.getCheapestProductByCategory(this.category).subscribe(
      (data) => {
        console.log(data);
        if (typeof data[0] !== 'undefined' && data[0] !== null) {
          console.log(data[0]._productId);
          this.productId = data;
        }
      }
    );
  }
}
