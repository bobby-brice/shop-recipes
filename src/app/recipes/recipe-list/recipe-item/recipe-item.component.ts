import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    //we emit this event on click to pass this data and the recipe component subscribes to this event firing and sets the recipe selected
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
