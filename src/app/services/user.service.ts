import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	user: {
		id: number
		userName: string
		address: string
		cardNumber: string
		totalAmount: number
	}
	constructor() {
		this.user = {
			id: 1,
			userName: '',
			address: '',
			cardNumber: '',
			totalAmount: 0
		}
	}
	getUserInfo() { return this.user }
 	assignUser(user: User, total: number) {
		this.user = user
		this.user.totalAmount = total
		return this.user
	}
}


