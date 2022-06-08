import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-card-success',
	templateUrl: './card-success.component.html',
	styleUrls: ['./card-success.component.scss'],
})
export class CardSuccessComponent implements OnInit {
	user: User = new User();
	constructor(private userService: UserService, private router: Router) {}

	ngOnInit(): void {
		this.getInfo();
	}
	getInfo() {
		this.user = this.userService.getUserInfo();
	}
	handleBack(): void {
		this.router.navigateByUrl('/');
	}
}
