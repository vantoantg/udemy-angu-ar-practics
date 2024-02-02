import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Input() dropdownToggle = false;
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
