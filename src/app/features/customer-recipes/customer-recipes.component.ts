import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Recipe } from '../../models/recipe-item.model'; 
import { RECIPES } from '../../mocked/recipes-data.mock';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';



@Component({
  selector: 'app-customer-recipes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzPaginationModule
  ],
  templateUrl: './customer-recipes.component.html',
  styleUrls: ['./customer-recipes.component.css']
})
export class CustomerRecipesComponent implements OnInit{
  recipes: Recipe[] = [];
  currentPage = 1;
  pageSize = 8;

  ngOnInit(): void {
    this.recipes = RECIPES;
  }

  openAddModal() {
    // vei completa asta ulterior
  }

  openEditModal(recipe: Recipe) {
    // vei completa asta ulterior
  }
  get pagedRecipes(): Recipe[] {
  const start = (this.currentPage - 1) * this.pageSize;
  return this.recipes.slice(start, start + this.pageSize);
}

onPageChange(page: number): void {
  this.currentPage = page;
}

}
