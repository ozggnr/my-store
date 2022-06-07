import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../models/Product';
import { CardService } from '../services/card.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
	product: Product = new Product
	id: number = 0
	quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	selectedAmount: number = 1
	constructor (
		private route: ActivatedRoute,
		private router: Router,
		private productService: ProductService,
		private cardService: CardService
	) { }

	ngOnInit(): void {
		this.getProductId()
	}

	getProductId(): void {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.id = Number(params.get('id'))
			this.productService.getProducts().subscribe(products => {
				this.product = products.find(product => product.id === this.id) as Product
			})
		})
	}
	handleAmountChange(amount: number): void { this.selectedAmount = amount }
	handleAddCart(product: Product): void {
		this.cardService.addToCart(product, this.selectedAmount)
		alert('New item added to cart!')
	}
	handleBack(): void {
		this.router.navigateByUrl('/')
	}
}
