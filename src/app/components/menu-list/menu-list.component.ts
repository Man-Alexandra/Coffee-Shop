import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productData } from '../../mocked/product-data.mock';
import { ProductItem } from '../../models/product-item.model';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { CartService } from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css',
  standalone: true
})
export class MenuListComponent {
  readonly list = productData;
  filteredItems: ProductItem[] = [];

  constructor(private cartService: CartService,  private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchTerm = (params['search'] || '').toLowerCase();
      this.filteredItems = this.list.filter(item =>
        item.name.toLowerCase().includes(searchTerm)
      );
    });
  }

  onAddProduct(item: ProductItem) {
    this.cartService.addToCart(item);
  }
  
}

