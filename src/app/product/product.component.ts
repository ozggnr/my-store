import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product
  @Output() paramId = new EventEmitter<number>()
  constructor() {
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
   }

  ngOnInit(): void {}
  handleImage(product: Product) {
    console.log(product)
    this.paramId.emit(product.id)
  }
}
