import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.css'],
})
export class DeleteRecipeComponent implements OnInit {
  deleteRecipeForm!: FormGroup;
  recipe!: Recipe;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
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
    this.recipeService
      .getRecipeByNameAndAuthor(this.name, this.author)
      .subscribe((recipe) => {
        this.recipe = recipe;
        this.deleteRecipe();
      });
  }

  deleteRecipe() {
    this.recipeService
      .deleteRecipe(this.recipe.id)
      .subscribe((x) => console.log('deleted'));
  }

  get name() {
    return this.deleteRecipeForm.get('name')?.value;
  }

  get author() {
    return this.deleteRecipeForm.get('author')?.value;
  }
}
