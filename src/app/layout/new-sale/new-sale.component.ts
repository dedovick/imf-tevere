import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
    selector: 'app-new-sale',
    templateUrl: './new-sale.component.html',
    styleUrls: ['./new-sale.component.scss']
})
export class NewSaleComponent implements OnInit {

    products: any[];
    cart: any[];

    constructor(public productsService: ProductsService) {
    }


    ngOnInit() {
        this.products = this.productsService.getProducts();
        this.cart = this.productsService.getCart();
    }

    insertCart(product: any) {
        this.cart.push(product);
        console.log('Cart: ' + JSON.stringify(this.cart));
    }
}
