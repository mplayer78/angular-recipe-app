import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onIngredientSubmit() {
    const newIngredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );
    this.ingredientAdded.emit(newIngredient);
  }
}
