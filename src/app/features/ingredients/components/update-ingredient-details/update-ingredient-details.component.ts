import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IngredientCategory } from 'src/app/core/enums/ingredient-category';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientPost } from 'src/app/core/models/post-models/ingredient-post';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import {
  getIngredientCategoryKey,
  getIngredientCategoryValue,
} from 'src/app/core/utils/ingredient-functions';

@Component({
  selector: 'app-update-ingredient-details',
  templateUrl: './update-ingredient-details.component.html',
  styleUrls: ['./update-ingredient-details.component.css'],
})
export class UpdateIngredientDetailsComponent implements OnInit {
  editMode: boolean = false;
  updateIngredientForm!: FormGroup;
  ingredient!: Ingredient;
  selectedImageName!: string;
  responseMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.getIngredient();

    this.updateIngredientForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      category: [''],
      calories: ['', [Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')]],
      fats: ['', [Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')]],
      carbs: ['', [Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')]],
      proteins: ['', [Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')]],
      image: [null],
    });
  }

  getIngredient() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.ingredientService.getIngredientById(id).subscribe({
      next: (ingredient) => (this.ingredient = ingredient),
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.responseMessage = `Ingredient with id:${id} not found!`;
        }
      },
    });
  }

  getIngredientCategory() {
    return getIngredientCategoryValue(this.ingredient.category);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    this.responseMessage = '';

    const patchIngredient: IngredientPost = {
      name:
        this.ingredient.name !== this.name && this.name !== ''
          ? this.name
          : null,
      category:
        this.ingredient.category !== getIngredientCategoryKey(this.category)
          ? getIngredientCategoryKey(this.category)
          : null,
      calories:
        this.ingredient.calories !== parseFloat(this.calories)
          ? parseFloat(this.calories)
          : null,
      fats:
        this.ingredient.fats !== parseFloat(this.fats)
          ? parseFloat(this.fats)
          : null,
      carbs:
        this.ingredient.carbs !== parseFloat(this.carbs)
          ? parseFloat(this.carbs)
          : null,
      proteins:
        this.ingredient.proteins !== parseFloat(this.proteins)
          ? parseFloat(this.calories)
          : null,
    };

    this.ingredientService
      .patchIngredient(this.ingredient.id, patchIngredient)
      .subscribe({
        next: () => {
          if (this.image !== null) this.addImageFromForm();
        },
        error: () =>
          (this.responseMessage = 'Error while updating the ingredient!'),
        complete: () =>
          (this.responseMessage = 'Ingredient updated successfully!'),
      });
  }

  onFileChange(event: any) {
    const image = event.target.files[0];
    this.selectedImageName = image.name;

    this.updateIngredientForm.get('image')?.setValue(image);
  }

  addImageFromForm() {
    const formData: FormData = new FormData();
    formData.set('File', this.image);

    this.ingredientService
      .addImageToIngredient(this.ingredient.id, formData)
      .subscribe({
        //next: () => this.refresh(),
        error: () =>
          (this.responseMessage = 'Error while updating the ingredient image!'),
      });
  }

  refresh(): void {
    window.location.reload();
  }

  get name() {
    return this.updateIngredientForm.get('name')?.value;
  }

  get category(): string {
    return this.updateIngredientForm.get('category')?.value;
  }

  get calories(): string {
    return this.updateIngredientForm.get('calories')?.value;
  }

  get fats(): string {
    return this.updateIngredientForm.get('fats')?.value;
  }

  get carbs(): string {
    return this.updateIngredientForm.get('carbs')?.value;
  }

  get proteins(): string {
    return this.updateIngredientForm.get('proteins')?.value;
  }

  get image() {
    return this.updateIngredientForm.get('image')?.value;
  }
}
