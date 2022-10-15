import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.css'],
})
export class DeleteRecipeComponent implements OnInit {
  deleteRecipeForm!: FormGroup;
  recipe!: Recipe;
  responseMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.deleteRecipeForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          // Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(100),
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

  onSubmit() {
    this.responseMessage = '';

    this.recipeService
      .getRecipeByNameAndAuthor(this.name.trim(), this.author.trim())
      .subscribe({
        next: (recipe) => {
          this.recipe = recipe;
          this.deleteRecipe();
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage = `Recipe with name: ${this.name} or author: ${this.author} not found!`;
            this.notifierService.showNotification(this.responseMessage);
          }
        },
      });
  }

  deleteRecipe() {
    this.responseMessage = '';

    this.recipeService.deleteRecipe(this.recipe.id).subscribe({
      complete: () => {
        this.responseMessage = 'Recipe deleted successfully!';
        this.notifierService.showNotification(this.responseMessage);
      },
    });
  }

  get name() {
    return this.deleteRecipeForm.get('name')?.value;
  }

  get author() {
    return this.deleteRecipeForm.get('author')?.value;
  }
}
