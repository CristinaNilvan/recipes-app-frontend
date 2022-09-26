import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { RecipeIngredient } from 'src/app/core/models/get-models/recipe-ingredient';
import { RecipeIngredientPost } from 'src/app/core/models/post-models/recipe-ingredient-post';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { RecipeIngredientService } from 'src/app/core/services/recipe-ingredient.service';

@Component({
  selector: 'app-create-recipe-ingredient',
  templateUrl: './create-recipe-ingredient.component.html',
  styleUrls: ['./create-recipe-ingredient.component.css'],
})
export class CreateRecipeIngredientComponent implements OnInit {
  createRecipeIngredientForm!: FormGroup;
  ingredient!: Ingredient;
  recipeIngredient!: RecipeIngredient;
  @Output() recipeIngredientEvent = new EventEmitter<RecipeIngredient>();

  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService,
    private recipeIngredientService: RecipeIngredientService
  ) {}

  ngOnInit(): void {
    this.createRecipeIngredientForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          // Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      quantity: [
        '',
        [Validators.required, Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')],
      ],
    });
  }

  onSubmit() {
    this.ingredientService
      .getIngredientByName(this.nameFromForm)
      .subscribe((ingredient) => {
        this.ingredient = ingredient;
        this.createRecipeIngredient();
      });
  }

  createRecipeIngredient() {
    const recipeIngredient: RecipeIngredientPost = {
      quantity: parseFloat(this.quantityFromForm),
      ingredientId: this.ingredient.id,
    };

    this.recipeIngredientService
      .createRecipeIngredient(recipeIngredient)
      .subscribe((recipeIngredient) => {
        this.recipeIngredient = recipeIngredient;
        this.emitRecipeIngredient();
      });
  }

  emitRecipeIngredient() {
    this.recipeIngredientEvent.emit(this.recipeIngredient);
  }

  setIngredient(ingredient: Ingredient) {
    this.ingredient = ingredient;
  }

  get nameFromForm() {
    return this.createRecipeIngredientForm.get('name')?.value;
  }

  get quantityFromForm(): string {
    return this.createRecipeIngredientForm.get('quantity')?.value;
  }
}
