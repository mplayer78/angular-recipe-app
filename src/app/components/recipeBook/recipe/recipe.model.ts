import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recipe {
  private static idCounter: number = 0;
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingredient[] = []
  ) {
    Recipe.idCounter += 1;
    this.id = Recipe.idCounter;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
