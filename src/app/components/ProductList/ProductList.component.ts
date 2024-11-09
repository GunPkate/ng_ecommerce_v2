import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/Product';

@Component({
  selector: 'app-ProductList',
  templateUrl: './ProductList.component.html',
  styleUrls: ['./ProductList.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(

  ) {}

  ngOnInit(): void {
   
  }

  addToCart(product: Product): void {
 
  }
}

