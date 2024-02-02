import {RecipeModel} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'A Test Recipe',
      'This is simply test',
      'https://guardian.ng/wp-content/uploads/2017/03/healthyfoods.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 1),
      ]
    ),
    new RecipeModel(
      'A Test Recipe V1',
      'This is simply test',
      'https://media.gettyimages.com/id/1345444175/photo/close-up-of-womans-hand-holding-a-bowl-of-fresh-beef-cobb-salad-serving-on-the-dining-table.jpg?s=2048x2048&w=gi&k=20&c=VGi-uTWg958ZyO6x2yDp35qHB47-YUiGLLb1uATMJL8=',
      []),
    new RecipeModel(
      'A Test Recipe V2',
      'This is simply test',
      'https://media.gettyimages.com/id/1081422898/photo/pan-fried-duck.jpg?s=2048x2048&w=gi&k=20&c=vGF_hp35UYlhhzNN1oNYb68xZxLb6AZc3PaHnmKssh4=',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('Meat', 1),
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.slService.addIngredients(ingredients);
  }
}
