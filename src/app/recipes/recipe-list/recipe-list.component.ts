import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is simply test', 'https://guardian.ng/wp-content/uploads/2017/03/healthyfoods.jpg'),
    new RecipeModel('A Test Recipe V2', 'This is simply test', 'https://guardian.ng/wp-content/uploads/2017/03/healthyfoods.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }
}
