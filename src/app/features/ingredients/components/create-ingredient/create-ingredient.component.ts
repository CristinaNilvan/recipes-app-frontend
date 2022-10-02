import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientPost } from 'src/app/core/models/post-models/ingredient-post';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { getIngredientCategoryKey } from '../../../../core/utils/ingredient-functions';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css'],
})
export class CreateIngredientComponent implements OnInit {
  createIngredientForm!: FormGroup;
  ingredient!: Ingredient;
  selectedImageName!: string;
  responseMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.createIngredientForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      category: ['', [Validators.required]],
      calories: [
        '',
        [Validators.required, Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')],
      ],
      fats: [
        '',
        [Validators.required, Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')],
      ],
      carbs: [
        '',
        [Validators.required, Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')],
      ],
      proteins: [
        '',
        [Validators.required, Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')],
      ],
      image: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.responseMessage = '';

    const formIngredient: IngredientPost = {
      name: this.name,
      category: getIngredientCategoryKey(this.category),
      calories: parseFloat(this.calories),
      fats: parseFloat(this.fats),
      carbs: parseFloat(this.carbs),
      proteins: parseFloat(this.proteins),
    };

    this.ingredientService.createIngredient(formIngredient).subscribe({
      next: (ingredient) => {
        this.ingredient = ingredient;
        this.addImageFromForm();
      },
      error: () =>
        (this.responseMessage = 'Error while creating the ingredient!'),
      complete: () =>
        (this.responseMessage = 'Ingredient created successfully!'),
    });
  }

  onFileChange(event: any) {
    const image = event.target.files[0];
    this.selectedImageName = image.name;

    this.createIngredientForm.get('image')?.setValue(image);
  }

  addImageFromForm() {
    this.responseMessage = '';
    const formData: FormData = new FormData();
    formData.set('File', this.image);

    this.ingredientService
      .addImageToIngredient(this.ingredient.id, formData)
      .subscribe({
        error: () =>
          (this.responseMessage = 'Error while adding the ingredient image!'),
      });
  }

  get name() {
    return this.createIngredientForm.get('name')?.value;
  }

  get category(): string {
    return this.createIngredientForm.get('category')?.value;
  }

  get calories(): string {
    return this.createIngredientForm.get('calories')?.value;
  }

  get fats(): string {
    return this.createIngredientForm.get('fats')?.value;
  }

  get carbs(): string {
    return this.createIngredientForm.get('carbs')?.value;
  }

  get proteins(): string {
    return this.createIngredientForm.get('proteins')?.value;
  }

  get image() {
    return this.createIngredientForm.get('image')?.value;
  }
}
