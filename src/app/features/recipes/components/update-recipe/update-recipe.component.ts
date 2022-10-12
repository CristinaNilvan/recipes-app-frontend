import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css'],
})
export class UpdateRecipeComponent implements OnInit {
  updateRecipeForm!: FormGroup;
  recipe!: Recipe;
  responseMessage: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.updateRecipeForm = this.formBuilder.group({
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
      .getRecipeByNameAndAuthor(this.name, this.author)
      .subscribe({
        next: (recipe) => {
          this.recipe = recipe;
          this.navigateToRecipe();
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage = `Recipe with name:${this.name} or author:${this.author} not found!`;
          }
        },
      });
  }

  navigateToRecipe() {
    const route = `/admin/update-recipe/${this.recipe.id}`;
    this.router.navigate([route]);
  }

  get name() {
    return this.updateRecipeForm.get('name')?.value;
  }

  get author() {
    return this.updateRecipeForm.get('author')?.value;
  }
}
