import { Product } from "./Product"

export class CardItem {
	id: number
	product: Product
	quantity: number
	totalPrice: number

	constructor() {
		this.id = 1
		this.product = new Product()
		this.quantity = 0
		this.totalPrice = 0
	}
}
