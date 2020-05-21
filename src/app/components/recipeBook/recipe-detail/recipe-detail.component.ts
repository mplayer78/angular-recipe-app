import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from '../../shoppingList/shopping.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  focusRecipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.focusRecipe = this.recipeService.getRecipe(1);
    });
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.focusRecipe.ingredients
    );
  }
}
