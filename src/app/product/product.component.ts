import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CardItem } from '../models/CardItem';
import { Product } from '../models/Product';
import { CardService } from '../services/card.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
	@Input() product: Product;
	@Output() add = new EventEmitter()
	cardItem: CardItem = new CardItem();
	cardList: CardItem[] = [];
	quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	selectedAmount: number = 1;
	constructor(private cardService: CardService) {
		this.product = {
			id: 1,
			name: '',
			price: 0,
			url: '',
			description: '',
		};
	}

	ngOnInit(): void {}
	handleSubmit(product: Product): void {
		const cardItem = this.cardService.createCardItem(product, this.selectedAmount)
		this.add.emit(cardItem)
		alert('New item added to cart!');
	}
	handleQuantity(amount: number) {
		this.selectedAmount = amount;
	}
}
