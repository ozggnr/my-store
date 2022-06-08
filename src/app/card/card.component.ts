import { Component, OnInit, Input } from '@angular/core';
import { CardItem } from '../models/CardItem';
import { CardService } from '../services/card.service';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { Router } from '@angular/router';
@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	@Input() user: User;
	cardItemList: CardItem[] = [];
	quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	totalAmount = 0;

	constructor(
		private cardService: CardService,
		private router: Router,
		private userService: UserService
	) {
		this.user = {
			id: 1,
			userName: '',
			address: '',
			cardNumber: '',
			totalAmount: 0,
		};
	}

	ngOnInit(): void {
		this.getCartList();
		this.getTotalCardPrice();
	}
	getCartList(): void {
		this.cardItemList = this.cardService.getCardList();
		console.log(this.cardItemList);
	}

	handleFormChange(e: any, cardItem: CardItem): void {
		this.cardService.updateCardList(cardItem, e);
		this.getTotalCardPrice();
	}
	getTotalCardPrice(): void {
		this.totalAmount = this.cardService.getTotalCardPrice();
	}
	handleForm(user: User): void {
		this.user = user;
		this.userService.assignUser(user, this.totalAmount);
		this.router.navigateByUrl('/card/complete');
		this.cardService.clearCard();
	}
	handleRemoveItem(e: any, cardItem: CardItem) {
		this.cardService.removeFromCard(cardItem);
		this.ngOnInit();
		alert('Item removed from cart!');
	}
}
