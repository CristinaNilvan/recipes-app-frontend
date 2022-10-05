import { ViewportScroller } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
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
  suggested: boolean = false;
  suggestRecipesForm!: FormGroup;
  suggestedRecipes!: Recipe[];
  pageNumber: number = 1;
  pageSize: number = 5;
  ingredientName!: string;
  ingredientQuantity!: number;
  responseMessage: string = '';
  recipesResponseMessage: string = '';

  constructor(
    private scroller: ViewportScroller,
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
    this.responseMessage = '';
    this.pageNumber = 1;
    this.ingredientName = this.ingredientNameFromForm;
    this.ingredientQuantity = parseFloat(this.ingredientQuantityFromForm);

    this.recipeService
      .getSuggestedRecipes(
        this.pageNumber,
        this.pageSize,
        this.ingredientName,
        this.ingredientQuantity
      )
      .subscribe({
        next: (recipes) => {
          this.suggestedRecipes = recipes;
          this.suggested = true;
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage =
              "Can't find recipes with this ingredient and quantity!";
          }
        },
      });
  }

  navigateToFragment() {
    this.scroller.scrollToAnchor('suggestedRecipes');
    this.suggested = false;
  }

  onScroll() {
    this.recipesResponseMessage = '';

    this.recipeService
      .getSuggestedRecipes(
        ++this.pageNumber,
        this.pageSize,
        this.ingredientName,
        this.ingredientQuantity
      )
      .subscribe({
        next: (recipes) => this.suggestedRecipes.push(...recipes),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.recipesResponseMessage = 'No more recipes!';
          }
        },
      });
  }

  get ingredientNameFromForm() {
    return this.suggestRecipesForm.get('ingredientName')?.value;
  }

  get ingredientQuantityFromForm(): string {
    return this.suggestRecipesForm.get('ingredientQuantity')?.value;
  }
}
