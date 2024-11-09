import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { CartItem } from 'src/app/interface/CartItem';
import { CartService } from 'src/app/service/CartService';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
}
