import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-approve-recipe',
  templateUrl: './approve-recipe.component.html',
  styleUrls: ['./approve-recipe.component.css'],
})
export class ApproveRecipeComponent implements OnInit {
  approveRecipeForm!: FormGroup;
  recipe!: Recipe;
  unapprovedRecipes: Recipe[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;
  recipesResponseMessage: string = '';
  responseMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.getRecipes();

    this.approveRecipeForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          // Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      author: [
        '',
        [
          Validators.required,
          // Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(70),
        ],
      ],
    });
  }

  getRecipes() {
    this.recipesResponseMessage = '';

    this.recipeService
      .getUnapprovedRecipes(this.pageNumber, this.pageSize)
      .subscribe({
        next: (recipes) => (this.unapprovedRecipes = recipes),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.recipesResponseMessage = 'No more recipes!';
          }
        },
      });
  }

  onScroll() {
    this.recipesResponseMessage = '';

    this.recipeService
      .getUnapprovedRecipes(++this.pageNumber, this.pageSize)
      .subscribe({
        next: (recipes) => this.unapprovedRecipes.push(...recipes),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.recipesResponseMessage = 'No more recipes!';
          }
        },
      });
  }

  onSubmit() {
    this.responseMessage = '';

    this.recipeService
      .getRecipeByNameAndAuthor(this.name.trim(), this.author.trim())
      .subscribe({
        next: (recipe) => {
          this.recipe = recipe;
          this.approveRecipe();
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage = `Recipe with name: ${this.name} or author: ${this.author} not found!`;
            this.notifierService.showNotification(this.responseMessage);
          }
        },
      });
  }

  approveRecipe() {
    this.recipeService.approveRecipe(this.recipe.id).subscribe({
      complete: () => {
        this.responseMessage = `Recipe with name: ${this.name} and author: ${this.author} approved!`;
        this.notifierService.showNotification(this.responseMessage);
      },
    });
  }

  get name() {
    return this.approveRecipeForm.get('name')?.value;
  }

  get author() {
    return this.approveRecipeForm.get('author')?.value;
  }
}
