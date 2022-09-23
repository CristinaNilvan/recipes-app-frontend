import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  createRecipeForm!: FormGroup;

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
    const image = this.createRecipeForm.get('image')?.value;

    const formData: FormData = new FormData();
    formData.set('File', image);

    // this.recipeService
    //   .addImageToRecipes(14, formData)
    //   .subscribe((x) => console.log('aici'));
  }

  onClear() {
    this.createRecipeForm.reset();
  }

  onFileChange(event: any) {
    const image = event.target.files[0];
    this.createRecipeForm.get('image')?.setValue(image);
  }
}
