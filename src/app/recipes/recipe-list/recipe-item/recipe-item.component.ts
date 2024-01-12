import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe: RecipeModel;
    @Output() recipeSelected = new EventEmitter<void>();

    ngOnInit() {
    }

  onSelected() {
      this.recipeSelected.emit();
  }
}
