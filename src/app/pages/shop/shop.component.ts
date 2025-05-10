import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductItem } from '../../models/product-item.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  constructor(public cartService: CartService,private router: Router) {}
  
  get cartItems() {
    return this.cartService.getCart();
  }

  remove(index: number) {
    this.cartService.removeFromCart(index);
  }

  // Decrease the quantity of an item in the cart
  decreaseQuantity(item: ProductItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Increase the quantity of an item in the cart
  increaseQuantity(item: ProductItem) {
    item.quantity++;
  }

  get totalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  clear() {
    this.cartService.clearCart();
  }

  goToMenu(){
    this.router.navigate(['/menu']);
  }
}
