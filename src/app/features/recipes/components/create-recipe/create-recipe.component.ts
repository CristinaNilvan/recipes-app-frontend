import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipePost } from 'src/app/core/models/post-models/recipe-post';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from 'src/app/core/services/recipe.service';
import {
  getRecipeMealTypeKey,
  getRecipeServingTimeKey,
} from '../../utils/recipe-functions';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  createRecipeForm!: FormGroup;
  recipe!: Recipe;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.createRecipeForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      author: [
        '',
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(70),
        ],
      ],
      description: ['', [Validators.required, Validators.maxLength(10000)]],
      mealType: ['', [Validators.required]],
      servingTime: ['', [Validators.required]],
      servings: [
        '',
        [Validators.required, Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')],
      ],
      image: [null, [Validators.required]],
    });
  }

  onSubmit() {
    const formRecipe: RecipePost = {
      name: this.name,
      author: this.author,
      description: this.description,
      mealType: getRecipeMealTypeKey(this.mealType),
      servingTime: getRecipeServingTimeKey(this.servingTime),
      servings: parseFloat(this.servings),
    };

    // this.recipeService.createRecipe(formRecipe).subscribe((recipe) => {
    //   this.recipe = recipe;
    //   this.addImageFromForm(this.recipe.id);
    // });
  }

  onClear() {
    this.createRecipeForm.reset();
  }

  onFileChange(event: any) {
    const image = event.target.files[0];
    this.createRecipeForm.get('image')?.setValue(image);
  }

  addImageFromForm(id: number) {
    const image = this.createRecipeForm.get('image')?.value;
    const formData: FormData = new FormData();
    formData.set('File', image);

    this.recipeService.addImageToRecipe(id, formData).subscribe();
  }

  get name() {
    return this.createRecipeForm.get('name')?.value;
  }

  get author() {
    return this.createRecipeForm.get('author')?.value;
  }

  get description() {
    return this.createRecipeForm.get('description')?.value;
  }

  get mealType(): string {
    return this.createRecipeForm.get('mealType')?.value;
  }

  get servingTime(): string {
    return this.createRecipeForm.get('servingTime')?.value;
  }

  get servings(): string {
    return this.createRecipeForm.get('servings')?.value;
  }

  get image() {
    return this.createRecipeForm.get('image')?.value;
  }
}
