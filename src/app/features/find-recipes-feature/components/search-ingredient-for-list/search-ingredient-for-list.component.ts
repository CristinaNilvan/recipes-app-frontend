import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-search-ingredient-for-list',
  templateUrl: './search-ingredient-for-list.component.html',
  styleUrls: ['./search-ingredient-for-list.component.css'],
})
export class SearchIngredientForListComponent implements OnInit {
  searchForm!: FormGroup;
  ingredient!: Ingredient;
  responseMessage: string = '';
  @Output() ingredientEvent = new EventEmitter<Ingredient>();

  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          // Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  onSubmit() {
    this.responseMessage = '';

    this.ingredientService.getIngredientByName(this.name).subscribe({
      next: (ingredient) => {
        this.ingredient = ingredient;
        this.emitIngredient();
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.responseMessage = `Ingredient with name:${this.name} not found!`;
        }
      },
    });
  }

  emitIngredient() {
    this.ingredientEvent.emit(this.ingredient);
  }

  get name() {
    return this.searchForm.get('name')?.value;
  }
}
