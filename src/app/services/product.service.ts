import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/Product';
@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private productsUrl = 'assets/data.json';
	constructor(private http: HttpClient) {}

	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(this.productsUrl);
	}
}
