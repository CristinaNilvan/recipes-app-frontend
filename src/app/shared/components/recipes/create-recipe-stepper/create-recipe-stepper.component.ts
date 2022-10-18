import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeIngredient } from 'src/app/core/models/get-models/recipe-ingredient';
import { RecipePost } from 'src/app/core/models/post-models/recipe-post';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { RecipeService } from 'src/app/core/services/recipe.service';
import {
  getRecipeMealTypeKey,
  getRecipeServingTimeKey,
} from 'src/app/core/utils/recipe-functions';

@Component({
  selector: 'app-create-recipe-stepper',
  templateUrl: './create-recipe-stepper.component.html',
  styleUrls: ['./create-recipe-stepper.component.css'],
})
export class CreateRecipeStepperComponent implements OnInit {
  recipeDetailsForm!: FormGroup;
  recipeImageForm!: FormGroup;
  stepperOrientation!: Observable<StepperOrientation>;
  recipeIngredientIdList: number[] = [];
  recipe!: Recipe;
  selectedImageName!: string;
  responseMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private notifierService: NotifierService,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.recipeDetailsForm = this.formBuilder.group({
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
    });

    this.recipeImageForm = this.formBuilder.group({
      image: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.responseMessage = '';

    const formRecipe: RecipePost = {
      name: this.name,
      author: this.author,
      description: this.description,
      mealType: getRecipeMealTypeKey(this.mealType),
      servingTime: getRecipeServingTimeKey(this.servingTime),
      servings: parseFloat(this.servings),
    };

    this.recipeService.createRecipe(formRecipe).subscribe({
      next: (recipe) => {
        this.recipe = recipe;
        this.addImageFromForm();
        this.addRecipeIngredients();
      },
      error: () => {
        this.responseMessage = 'Error while creating the recipe!';
        this.notifierService.showNotification(this.responseMessage);
      },
      complete: () => {
        this.responseMessage = 'Recipe created successfully!';
        this.notifierService.showNotification(this.responseMessage);
      },
    });
  }

  onFileChange(event: any) {
    const image = event.target.files[0];
    this.selectedImageName = image.name;

    this.recipeImageForm.get('image')?.setValue(image);
  }

  addImageFromForm() {
    this.responseMessage = '';
    const formData: FormData = new FormData();
    formData.set('File', this.image);

    this.recipeService.addImageToRecipe(this.recipe.id, formData).subscribe({
      error: () => {
        this.responseMessage = 'Error while adding the recipe image!';
        this.notifierService.showNotification(this.responseMessage);
      },
    });
  }

  setRecipeIngredientList(recipeIngredientIdList: number[]) {
    this.recipeIngredientIdList = recipeIngredientIdList;
  }

  addRecipeIngredients() {
    this.recipeService
      .addRecipeIngredientsToRecipe(this.recipe.id, this.recipeIngredientIdList)
      .subscribe({
        error: () => {
          this.responseMessage = 'Error while adding the recipe ingredients!';
          this.notifierService.showNotification(this.responseMessage);
        },
      });
  }

  get name() {
    return this.recipeDetailsForm.get('name')?.value;
  }

  get author() {
    return this.recipeDetailsForm.get('author')?.value;
  }

  get description() {
    return this.recipeDetailsForm.get('description')?.value;
  }

  get mealType(): string {
    return this.recipeDetailsForm.get('mealType')?.value;
  }

  get servingTime(): string {
    return this.recipeDetailsForm.get('servingTime')?.value;
  }

  get servings(): string {
    return this.recipeDetailsForm.get('servings')?.value;
  }

  get image() {
    return this.recipeImageForm.get('image')?.value;
  }
}
