import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  focusRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.focusRecipe.subscribe((recipe: Recipe) => {
      this.focusRecipe = recipe;
    });
    console.log('this.focusRecipe', this.focusRecipe);
  }
}
