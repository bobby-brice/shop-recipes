import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Grilled Chicken', 'Grilled chicken with a fresh garden salad', 'https://i1.wp.com/smittenkitchen.com/wp-content/uploads//2019/10/chicken-tikka-masala.jpg?fit=750%2C500&ssl=1'),
    new Recipe ('Chicken Tenders', 'Chicken tenders straight off the kids menu', 'https://www.macheesmo.com/wp-content/uploads/2020/02/Buttermilk-Chicken-Tenders.jpg'),
  ];

  constructor() { }

  //return a new array that is an exact copy of the recipes using slice method
  getRecipes() {
    return this.recipes.slice();
  }
}
