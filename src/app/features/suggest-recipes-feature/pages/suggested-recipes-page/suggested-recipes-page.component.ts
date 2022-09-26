import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-suggested-recipes-page',
  templateUrl: './suggested-recipes-page.component.html',
  styleUrls: ['./suggested-recipes-page.component.css'],
})
export class SuggestedRecipesPageComponent implements OnInit {
  suggestRecipesForm!: FormGroup;
  suggestedRecipes!: Recipe[];
  pageNumber: number = 1;
  pageSize: number = 5;
  ingredientName!: string;
  ingredientQuantity!: number;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.suggestRecipesForm = this.formBuilder.group({
      ingredientName: [
        '',
        [
          Validators.required,
          // Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      ingredientQuantity: [
        '',
        [Validators.required, Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')],
      ],
    });
  }

  onSubmit() {
    this.ingredientName = this.ingredientNameFromForm;
    this.ingredientQuantity = parseFloat(this.ingredientQuantityFromForm);

    this.recipeService
      .getSuggestedRecipes(
        this.pageNumber,
        this.pageSize,
        this.ingredientName,
        this.ingredientQuantity
      )
      .subscribe((recipes) => (this.suggestedRecipes = recipes));
  }

  onClear() {
    this.suggestRecipesForm.reset();
  }

  onScroll() {
    this.recipeService
      .getSuggestedRecipes(
        ++this.pageNumber,
        this.pageSize,
        this.ingredientName,
        this.ingredientQuantity
      )
      .subscribe((recipes) => this.suggestedRecipes.push(...recipes));
  }

  get ingredientNameFromForm() {
    return this.suggestRecipesForm.get('ingredientName')?.value;
  }

  get ingredientQuantityFromForm(): string {
    return this.suggestRecipesForm.get('ingredientQuantity')?.value;
  }
}
