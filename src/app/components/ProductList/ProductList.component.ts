import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/Product';
import { CartService } from 'src/app/service/CartService';
import { ProductService } from 'src/app/service/productService';

@Component({
  selector: 'app-ProductList',
  templateUrl: './ProductList.component.html',
  styleUrls: ['./ProductList.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}

