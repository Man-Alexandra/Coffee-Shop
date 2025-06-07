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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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
    NzPaginationModule,
  ],
  templateUrl: './customer-recipes.component.html',
  styleUrls: ['./customer-recipes.component.css'],
})
export class CustomerRecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  pageIndex = 1;
  pageSize = 8;
  displayedRecipes: Recipe[] = [];
  isModalVisible = false;
  isEditMode = false;
  recipeForm!: FormGroup;
  selectedRecipeId: number | null = null;
  selectedRecipeImage: string | null = null;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.recipes = RECIPES;
    this.updateDisplayedRecipes();
    this.recipeForm = this.fb.group({
      product: [null, [Validators.required]],
      description: [null, [Validators.required]],
      ingredients: [null, [Validators.required]],
      name: [null, [Validators.required]],
      age: [null, [Validators.required, Validators.min(18)]],
      email: [null, [Validators.required, strictEmailValidator]],
    });
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.recipeForm.reset();
    this.isModalVisible = true;
  }

  handleCancel(): void {
    this.isModalVisible = false;
  }

  handleOk(): void {
    if (this.recipeForm.invalid) {
      Object.values(this.recipeForm.controls).forEach((control) => {
        control.markAsDirty();
        control.updateValueAndValidity();
      });
      return;
    }

    const formValue = this.recipeForm.value;

    // Convert ingredients string to array
    const updatedRecipe: Recipe = {
      id: this.selectedRecipeId ?? this.generateUniqueId(),
      image:
        this.isEditMode && this.selectedRecipeImage
          ? this.selectedRecipeImage
          : 'assets/default-coffee.jpg',
      product: formValue.product,
      description: formValue.description,
      ingredients: formValue.ingredients
        .split(',')
        .map((i: string) => i.trim()),
      name: formValue.name,
      age: formValue.age,
      email: formValue.email,
    };

    if (this.isEditMode && this.selectedRecipeId !== null) {
      this.recipes = this.recipes.map((recipe) =>
        recipe.id === this.selectedRecipeId ? updatedRecipe : recipe
      );
    } else {
      this.recipes = [...this.recipes, updatedRecipe];
    }

    this.isModalVisible = false;
    this.selectedRecipeId = null;
    this.isEditMode = false;
    this.updateDisplayedRecipes();
  }

  updateDisplayedRecipes() {
    const startIndex = (this.pageIndex - 1) * this.pageSize;
    this.displayedRecipes = this.recipes.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.updateDisplayedRecipes();
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.pageIndex = 1; // reset to first page
    this.updateDisplayedRecipes();
  }
  generateUniqueId(): number {
    return Math.floor(Math.random() * 1000000);
  }
  openEditModal(recipe: Recipe): void {
    this.isEditMode = true;
    this.selectedRecipeId = recipe.id;
    this.selectedRecipeImage = recipe.image; // Save the current image
    this.recipeForm.setValue({
      product: recipe.product,
      description: recipe.description,
      ingredients: recipe.ingredients.join(', '), // convert array to comma-separated string
      name: recipe.name,
      age: recipe.age,
      email: recipe.email,
    });
    this.isModalVisible = true;
  }
}

const strictEmailValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const email = control.value;
  if (!email) return null;

  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email) ? null : { invalidEmail: true };
};
