import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Product } from '../../../shared/entities/Product';
import { CommentToProduct } from '../../../shared/entities/comment-to-prodct';
import { BasketItemModule } from "../../basket/basket-item.module";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    constructor(private productService: ProductService, private route: ActivatedRoute) { }
    public productDetails: Product;
    private sub: any;
    private id: number;
    public CategoryValue: any;
    public comm: string;
    public commentToSave: CommentToProduct;
    @Input() productIdToShow: number;

    ngOnInit() {
        this.comm = "";
        this.commentToSave = new CommentToProduct();
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.getProductDetails(this.id);
        })
    }

    getProductDetails(productId: number): any {
        this.productService.getProductDetails(productId).subscribe(
            (data) => {
                this.productDetails = data[0];
                this.getCategoryById(this.productDetails.category);
                console.log(this.productDetails);
            }
        );

        return this.productDetails;
    }

    getCategoryById(categoryId: number): any {
        this.productService.getCategory(categoryId).subscribe(
            (data) => {
                this.CategoryValue = data[0];
                this.productDetails.categoryValue = this.CategoryValue.name;
                console.log(data);
            }
        );

        return this.productDetails;
    }

    onSubmit(f: any, event: Event) {
    }

    addComment() {
        this.commentToSave.prodctId = this.productDetails.id;
        this.commentToSave.comment = this.comm;

        this.productService.addCommentToProduct(this.commentToSave).subscribe(
            (data) => {
            }
        );
    }

    addToBasket(product: Product) {
        //this.module.addToBaket(product);
        let tmpBasket: BasketItemModule[] = JSON.parse(localStorage.getItem("basket"));
        let index = tmpBasket.map((i) => i.id).indexOf(product.id)
        if (index != -1)
            tmpBasket[index].amount += 1;
        else
            tmpBasket.push(new BasketItemModule(this.productDetails.id, this.productDetails.name, "", this.productDetails.price, 1));

        localStorage.setItem("basket", JSON.stringify(tmpBasket));
    }
}
