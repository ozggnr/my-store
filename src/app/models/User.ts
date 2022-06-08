export class User {
	id: number;
	userName: string;
	address: string;
	cardNumber: string;
	totalAmount: number;

	constructor() {
		this.id = 1;
		this.userName = '';
		this.address = '';
		this.cardNumber = '';
		this.totalAmount = 0;
	}
}
