import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //the id assignment below only provides one instance of the id but we can select other recipes so we need to subscribe to the changes
    // const id = this.route.snapshot.params['id'];

    //preferred method
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        //method from service
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  //instead of using routerLink in the template, could navigate programmatically using this solution
  //would have to add (click)=onEditRecipe in the template to work
  // onEditRecipe() {
  //   this.router.navigate(['edit'], { relativeTo: this.route });
  // }

}
