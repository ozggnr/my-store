import { Injectable } from '@angular/core';
import { CardItem } from '../models/CardItem';
import { Product } from '../models/Product';
@Injectable({
	providedIn: 'root',
})
export class CardService {
	cardIemList: CardItem[] = [];
	cardItem: {
		id: number;
		product: Product;
		quantity: number;
		totalPrice: number;
	};
	constructor() {
		this.cardItem = {
			id: 1,
			product: new Product(),
			quantity: 0,
			totalPrice: 0,
		};
	}

	addToCart(product: Product, productAmount: number) {
		const existingItemIndex = this.cardIemList.findIndex((item) => item.id === product.id) as number;

		if (existingItemIndex >= 0) {
			this.cardIemList[existingItemIndex].quantity = productAmount;
			this.cardIemList[existingItemIndex].totalPrice = this.calculateProductPrice(product.price, productAmount);
		}
		//To deep clone the product object
		else {
			this.cardItem.id = product.id;
			this.cardItem.product = product;
			this.cardItem.quantity = productAmount;
			this.cardItem.totalPrice = this.calculateProductPrice(product.price,productAmount);
			this.cardIemList.push(JSON.parse(JSON.stringify(this.cardItem)));
		}
		return this.cardIemList;
	}
	getCardList() {
		return this.cardIemList;
	}
	updateCardList(cardItem: CardItem, amount: number) {
		const existingItemIndex = this.cardIemList.findIndex((item) => item.id === cardItem.id);
		this.cardIemList[existingItemIndex].quantity = amount;
		this.cardIemList[existingItemIndex].totalPrice = this.calculateProductPrice(cardItem.product.price, amount);
		return this.cardIemList;
	}

	getTotalCardPrice() {
		return this.cardIemList.reduce((total, cardItem) => {
			const price = Number(cardItem.totalPrice);
			total += price;
			return total;
		}, 0);
	}
	calculateProductPrice(productPrice: number, productAmount: number) {
		const total = (productPrice * productAmount).toFixed(2) as unknown as number;
		return total;
	}
	removeFromCard(cardItem: CardItem) {
		const newList = this.cardIemList.filter((item) => item.id !== cardItem.id);
		this.cardIemList = newList;
		return this.cardIemList;
	}
	clearCard() {
		this.cardIemList = [];
		return this.cardIemList;
	}
}
