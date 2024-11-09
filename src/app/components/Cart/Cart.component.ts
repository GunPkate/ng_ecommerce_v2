import { Component, OnInit } from '@angular/core';

import { CartItem } from 'src/app/interface/CartItem';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;



  ngOnInit(): void {

  }

  removeItem(productId: number): void {

  }
}
