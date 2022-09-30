import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-delete-ingredient',
  templateUrl: './delete-ingredient.component.html',
  styleUrls: ['./delete-ingredient.component.css'],
})
export class DeleteIngredientComponent implements OnInit {
  deleteIngredientForm!: FormGroup;
  ingredient!: Ingredient;
  responseMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.deleteIngredientForm = this.formBuilder.group({
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
        this.deleteIngredient();
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.responseMessage = `Ingredient with name:${this.name} not found!`;
        }
      },
    });
  }

  deleteIngredient() {
    this.responseMessage = '';

    this.ingredientService.deleteIngredient(this.ingredient.id).subscribe({
      complete: () =>
        (this.responseMessage = 'Ingredient deleted successfully!'),
    });
  }

  get name() {
    return this.deleteIngredientForm.get('name')?.value;
  }
}
