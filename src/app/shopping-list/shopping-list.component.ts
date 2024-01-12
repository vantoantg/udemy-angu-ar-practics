import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{
  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Potato', 10)
  ];
  constructor() {
  }
  ngOnInit() {

  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }
}
