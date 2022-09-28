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
    this.ingredientService
      .getIngredientByName(this.name)
      .subscribe((ingredient) => {
        this.ingredient = ingredient;
        this.deleteIngredient();
      });
  }

  deleteIngredient() {
    this.ingredientService
      .deleteIngredient(this.ingredient.id)
      .subscribe((x) => console.log('deleted'));
  }

  get name() {
    return this.deleteIngredientForm.get('name')?.value;
  }
}
