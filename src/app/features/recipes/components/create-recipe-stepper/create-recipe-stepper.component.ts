import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { RecipePost } from 'src/app/core/models/post-models/recipe-post';
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

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
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

  onFileChange(event: any) {
    const image = event.target.files[0];
    this.recipeImageForm.get('image')?.setValue(image);
  }

  addImageFromForm(id: number) {
    const image = this.recipeImageForm.get('image')?.value;
    const formData: FormData = new FormData();
    formData.set('File', image);

    this.recipeService.addImageToRecipe(id, formData).subscribe();
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
