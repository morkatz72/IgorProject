import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../../shared/entities/Product';
import { Category } from '../../../shared/entities/Category';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-or-update-product',
  templateUrl: './add-or-update-product.component.html',
  styleUrls: ['./add-or-update-product.component.css']
})
export class AddOrUpdateProductComponent implements OnInit {
  public product: Product;
  public categories: Category[];
  // 1 = add
  // 2 = update
  // 3 = delete
  public actionCode: number = 1;
  select: EventEmitter<string>;
  public CategoryValue: any;
  public buttonText: string = "הוסף מוצר";
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.product = new Product();
    this.getCategories();
    this.select = new EventEmitter();

    this.route.params.subscribe(params => {
      let id: number = +params['id'];
      if (id) {
        this.getProductDetails(id);
        this.actionCode = 3;
        if (this.actionCode == 2) {
          this.buttonText = "עדכן מוצר";
        }
        else if (this.actionCode == 3) {
          this.buttonText = "מחיקת מוצר";
        }
      }
    })
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
    if (this.actionCode == 1) {
      this.saveProduct();
    }
    else if (this.actionCode == 2){
      this.updateTheProduct();
    }
    else if (this.actionCode == 3) {
      this.deleteProduct();
    }
  }

  getProductDetails(productId: number): any {
    this.productService.getProductDetails(productId).subscribe(
      (data) => {
        this.product = data[0];
        this.getCategoryById(this.product.category);
        console.log(this.product);
        this.product.oldPrice = this.product.price;
      }
    );

    return this.product;
  }

  getCategoryById(categoryId: number): any {
    this.productService.getCategory(categoryId).subscribe(
      (data) => {
        this.CategoryValue = data[0];
        this.product.categoryValue = this.CategoryValue.name;
        console.log(data);
      }
    );
  }

  saveProduct() {
      this.product.calories = +this.product.calories;
      this.product.price = +this.product.price;
      this.productService.saveProduct(this.product).subscribe((results) => {
        this.product.id = +results;
        this.actionCode = 2;
        this.buttonText = "עדכן מוצר";
        this.router.navigate(['/add-or-update-product/' + this.product.id]);
   })
  }

  updateTheProduct() {
    console.log(this.product);
    this.productService.updateProduct(this.product).subscribe((results) => {
    })
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product).subscribe((results) => {
    })
  }
}
