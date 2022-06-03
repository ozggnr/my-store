import { Injectable } from '@angular/core';
import { CardItem } from '../models/CardItem';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class CardService {
	cardIemList: CardItem[] = []
	cardItem: { id: number; product: Product; quantity: number; totalPrice: number; };
	constructor() {
		this.cardItem = {
			id: 1,
			product: new Product(),
			quantity: 0,
			totalPrice: 0
		}
	}

	addToCart(product: Product, productAmount: number) {
		const item = this.updateCardItem(product, productAmount)
		//To deep clone the product object
		this.cardIemList.push(JSON.parse(JSON.stringify(item)))
		return this.cardIemList
	}
	getCardList() {
		return this.cardIemList
	}
	updateCardList(cardItem: CardItem) {
		console.log(cardItem)
	}
	updateCardItem(product: Product, productAmount: number) {
		this.cardItem.id = product.id
		this.cardItem.product = product
		this.cardItem.quantity = productAmount
		this.cardItem.totalPrice = productAmount * product.price
		return this.cardItem
	}
}
