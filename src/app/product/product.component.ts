import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardItem } from '../models/CardItem';
import { Product } from '../models/Product';
import { CardService } from '../services/card.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() product: Product
	cardItem: CardItem = new CardItem()
	cardList: CardItem[] = []
	quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	selectedAmount: number = 1
	constructor(private cardService: CardService) {
		this.product = {
			id: 1,
			name: '',
			price: 0,
			url: '',
			description: ''
		}

	}

	ngOnInit(): void {

	}
	handleSubmit(product: Product): void {
		console.log(product)
		console.log(this.selectedAmount, this.cardItem)
		// this.product = product
		this.cardService.addToCart(product, this.selectedAmount)
		alert('New item added to cart!')
	}
	handleQuantity(amount: number) { this.selectedAmount = amount }
}
