import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-get-recipe',
  templateUrl: './get-recipe.component.html',
  styleUrls: ['./get-recipe.component.css'],
})
export class GetRecipeComponent implements OnInit {
  getRecipeForm!: FormGroup;
  recipe!: Recipe;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.getRecipeForm = this.formBuilder.group({
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
    this.recipeService
      .getRecipeByNameAndAuthor(this.name, this.author)
      .subscribe((recipe) => {
        this.recipe = recipe;
        this.navigateToRecipe();
      });
  }

  navigateToRecipe() {
    const route = `/recipes/${this.recipe.id}`;
    this.router.navigate([route]);
  }

  get name() {
    return this.getRecipeForm.get('name')?.value;
  }

  get author() {
    return this.getRecipeForm.get('author')?.value;
  }
}