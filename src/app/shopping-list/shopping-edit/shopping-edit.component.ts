import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit, Output,
  ViewChild,
} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef

  // @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new IngredientModel(ingName, ingAmount);
    this.slService.addIngredientItem(newIngredient);
  }
}
