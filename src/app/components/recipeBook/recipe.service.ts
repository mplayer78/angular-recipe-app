import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Toast',
      'Put bread in toaster and press go',
      'https://www.simplyrecipes.com/wp-content/uploads/2010/01/cinnamon-toast-horiz-a-1800.jpg',
      [new Ingredient('Bread', 1), new Ingredient('Butter', 1)]
    ),
    new Recipe(
      'disgusting octupus mess',
      'Pan fry octopus in some salt and lemon juice, display on a plate with garnish, throw straight in the bin',
      'https://cookinglsl.com/wp-content/uploads/2016/07/octopus-6-1.jpg',
      [new Ingredient('Octopus', 1), new Ingredient('Lemon', 1)]
    ),
    new Recipe(
      'Chicken Surprise',
      "It's just chicken, SURPRISE!!",
      'https://img1.jamieoliver.com/jamieoliver/recipe-database/xtra_med/64975478.jpg?tr=w-430',
      [new Ingredient('Chicken Thigh', 2), new Ingredient('Tiling Grout', 1)]
    ),
  ];

  focusRecipe = new EventEmitter<Recipe>();

  constructor() {}

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }
}
