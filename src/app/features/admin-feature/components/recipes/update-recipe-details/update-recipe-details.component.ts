import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/core/models/get-models/recipe';
import { RecipeIngredient } from 'src/app/core/models/get-models/recipe-ingredient';
import { RecipePost } from 'src/app/core/models/post-models/recipe-post';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { RecipeService } from 'src/app/core/services/recipe.service';
import {
  getRecipeMealTypeKey,
  getRecipeMealTypeValue,
  getRecipeServingTimeKey,
  getRecipeServingTimeValue,
} from 'src/app/core/utils/recipe-functions';

@Component({
  selector: 'app-update-recipe-details',
  templateUrl: './update-recipe-details.component.html',
  styleUrls: ['./update-recipe-details.component.css'],
})
export class UpdateRecipeDetailsComponent implements OnInit {
  editMode: boolean = false;
  updateRecipeForm!: FormGroup;
  recipe!: Recipe;
  selectedImageName!: string;
  recipeIngredientList: RecipeIngredient[] = [];
  toDeleteRecipeIngredientIds: number[] = [];
  responseMessage: string = '';
  updateResponseMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.getRecipe();

    this.updateRecipeForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      author: [
        '',
        [
          Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(70),
        ],
      ],
      description: ['', [Validators.maxLength(10000)]],
      mealType: [''],
      servingTime: [''],
      servings: ['', [Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')]],
      image: [null],
    });
  }

  getRecipe() {
    this.responseMessage = '';
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.recipeService.getRecipeById(id).subscribe({
      next: (recipe) => (this.recipe = recipe),
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.responseMessage = `Recipe with id: ${id} not found!`;
        }
      },
    });
  }

  getRecipeMealType() {
    return getRecipeMealTypeValue(this.recipe.mealType);
  }

  getRecipeServingTime() {
    return getRecipeServingTimeValue(this.recipe.servingTime);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    this.updateResponseMessage = '';
  }

  saveChanges() {
    this.updateResponseMessage = '';

    const patchRecipe: RecipePost = {
      name:
        this.recipe.name !== this.name && this.name !== '' ? this.name : null,
      author:
        this.recipe.author !== this.author && this.author !== ''
          ? this.author
          : null,
      description:
        this.recipe.description !== this.description && this.description !== ''
          ? this.description
          : null,
      mealType:
        this.recipe.mealType !== getRecipeMealTypeKey(this.mealType)
          ? getRecipeMealTypeKey(this.mealType)
          : null,
      servingTime:
        this.recipe.servingTime !== getRecipeServingTimeKey(this.servingTime)
          ? getRecipeServingTimeKey(this.servingTime)
          : null,
      servings:
        this.recipe.servings !== parseFloat(this.servings)
          ? parseFloat(this.servings)
          : null,
    };

    this.recipeService.patchRecipe(this.recipe.id, patchRecipe).subscribe({
      next: () => {
        if (this.image !== null) this.addImageFromForm();
        if (this.recipeIngredientList.length > 0) this.addRecipeIngredients();
        if (this.toDeleteRecipeIngredientIds.length > 0)
          this.deleteRecipeIngredients();
      },
      error: () => {
        this.updateResponseMessage = 'Error while updating the recipe!';
        this.notifierService.showNotification(this.updateResponseMessage);
      },
      complete: () => {
        this.updateResponseMessage = 'Recipe updated successfully!';
        this.notifierService.showNotification(this.updateResponseMessage);
      },
    });
  }

  onFileChange(event: any) {
    const image = event.target.files[0];
    this.selectedImageName = image.name;

    this.updateRecipeForm.get('image')?.setValue(image);
  }

  addImageFromForm() {
    this.responseMessage = '';
    const formData: FormData = new FormData();
    formData.set('File', this.image);

    this.recipeService.addImageToRecipe(this.recipe.id, formData).subscribe({
      error: () => {
        this.updateResponseMessage = 'Error while updating the recipe image!';
        this.notifierService.showNotification(this.updateResponseMessage);
      },
    });
  }

  addRecipeIngredients() {
    this.recipeIngredientList.forEach((recipeIngredient) => {
      this.addRecipeIngredient(recipeIngredient.id);
    });
  }

  addRecipeIngredient(recipeIngredientId: number) {
    this.responseMessage = '';

    this.recipeService
      .addRecipeIngredientToRecipe(this.recipe.id, recipeIngredientId)
      .subscribe({
        error: () => {
          this.updateResponseMessage =
            'Error while adding the ingredients to the recipe!';
          this.notifierService.showNotification(this.updateResponseMessage);
        },
      });
  }

  deleteRecipeIngredients() {
    this.toDeleteRecipeIngredientIds.forEach((recipeIngredientId) => {
      this.deleteRecipeIngredient(recipeIngredientId);
    });
  }

  deleteRecipeIngredient(recipeIngredientId: number) {
    this.responseMessage = '';

    this.recipeService
      .removeRecipeIngredientFromRecipe(this.recipe.id, recipeIngredientId)
      .subscribe({
        error: () => {
          this.updateResponseMessage =
            'Error while deleting the ingredients from recipe!';
          this.notifierService.showNotification(this.updateResponseMessage);
        },
      });
  }

  setToDeleteRecipeIngredientList(toDeleteRecipeIngredientIds: number[]) {
    this.toDeleteRecipeIngredientIds = toDeleteRecipeIngredientIds;
  }

  setRecipeIngredientList(recipeIngredientList: RecipeIngredient[]) {
    this.recipeIngredientList = recipeIngredientList;
  }

  get name() {
    return this.updateRecipeForm.get('name')?.value;
  }

  get author() {
    return this.updateRecipeForm.get('author')?.value;
  }

  get description() {
    return this.updateRecipeForm.get('description')?.value;
  }

  get mealType(): string {
    return this.updateRecipeForm.get('mealType')?.value;
  }

  get servingTime(): string {
    return this.updateRecipeForm.get('servingTime')?.value;
  }

  get servings(): string {
    return this.updateRecipeForm.get('servings')?.value;
  }

  get image() {
    return this.updateRecipeForm.get('image')?.value;
  }
}
