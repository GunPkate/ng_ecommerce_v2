import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interface/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
        id: 1,
        name: 'Smartphone',
        price: 699.99,
        description: 'Latest model smartphone with advanced features',
        image: '',
        category: '',
        inStock: false
    },
    {
        id: 2,
        name: 'Laptop',
        price: 1299.99,
        description: 'Powerful laptop for work and gaming',
        image: '',
        category: '',
        inStock: false
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}