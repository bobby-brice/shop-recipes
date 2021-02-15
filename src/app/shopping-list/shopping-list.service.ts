import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];


  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  //This service method emits the event to the receiving component - shopping-list
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredientAdded(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

}
