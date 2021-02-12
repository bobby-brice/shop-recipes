import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  //we remove the onSelected() click event as we're now using the router and getting the selected ID through the service
  // onSelected() {
  //   //we emit this event on click to pass this data and the recipe component subscribes to this event firing and sets the recipe selected
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
