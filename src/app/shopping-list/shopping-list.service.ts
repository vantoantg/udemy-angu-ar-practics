import {IngredientModel} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Potato', 10),
    new IngredientModel('Tomato', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredientItem(ingredient: IngredientModel) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    /*for (let ingredient of ingredients) {
      this.addIngredientItem(ingredient);
    }*/

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
