import { Component, OnInit } from '@angular/core';
import { CardItem } from '../models/CardItem';
import { CardService } from '../services/card.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	cardItemList: CardItem[] = []
	quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	constructor(private cardService: CardService) { }

	ngOnInit(): void {
		this.getCartList()
	}
	getCartList() {
		this.cardItemList = this.cardService.getCardList()
	}
	handleChangeQuantity(amount: number) {
		console.log(amount)
	}
	handleForm(cardItem: CardItem) {
		console.log(cardItem)
	}
}
