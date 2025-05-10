import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItem } from '../../models/product-item.model';

@Component({
  selector: 'app-menu-item',
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
  standalone: true
})
export class MenuItemComponent {
  @Input() item!: ProductItem;
  @Output() add = new EventEmitter<ProductItem>();
  
onImageLoad(event: Event) {
   (event.target as HTMLImageElement).classList.add('loaded');
  }

onAddClick() {
    this.add.emit(this.item);
  }
}


