import { Component, OnInit } from '@angular/core';
import { CardItem } from '../models/CardItem';
import { Product } from '../models/Product';
import { CardService } from '../services/card.service';
import { ProductService } from '../services/product.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
	products: Product[] = [];
	constructor(
		private productService: ProductService,
		private cardService: CardService
	) {}

	ngOnInit(): void {
		this.productService.getProducts().subscribe((res) => {
			this.products = res;
		});
	}
	add(cardItem: CardItem) {
		this.cardService.addToCart(cardItem.product, cardItem.quantity);
	}
}
