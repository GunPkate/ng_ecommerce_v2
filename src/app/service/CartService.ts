import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interface/CartItem';
import { Product } from '../interface/Product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.cartSubject.next([...this.cartItems]);
  }

  getCart() {
    return this.cartSubject.asObservable();
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.cartSubject.next([...this.cartItems]);
  }
}
