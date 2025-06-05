import { Recipe } from './recipe.model';

export const RECIPES: Recipe[] = [
  {
    id: 1,
    name: "Maria Popescu",
    age: 28,
    email: "maria@example.com",
    product: "Iced Caramel Latte",
    description: "O băutură rece și dulce, perfectă pentru vară.",
    ingredients: ["Cafea espresso", "Lapte", "Gheață", "Sirop caramel"]
  },
  {
    id: 2,
    name: "Andrei Ionescu",
    age: 34,
    email: "andrei@example.com",
    product: "Choco-Mocha Delight",
    description: "O explozie de ciocolată și cafea.",
    ingredients: ["Cafea", "Lapte", "Ciocolată", "Frișcă"]
  },
  // adaugă minim 10 pentru 2 pagini
];
