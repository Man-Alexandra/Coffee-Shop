import { Injectable, signal } from '@angular/core';
import { ProductItem } from '../models/product-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems = signal<ProductItem[]>([]);

  getCart = this.cartItems.asReadonly();

  addToCart(item: ProductItem) {
    console.log('Added to cart:', item);
    this.cartItems.update(items => [...items, item]);
  }

  removeFromCart(index: number) {
    this.cartItems.update(items => items.filter((_, i) => i !== index));
  }


  clearCart() {
    this.cartItems.set([]);
  }
}
