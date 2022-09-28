import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-get-ingredient',
  templateUrl: './get-ingredient.component.html',
  styleUrls: ['./get-ingredient.component.css'],
})
export class GetIngredientComponent implements OnInit {
  getIngredientForm!: FormGroup;
  ingredient!: Ingredient;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.getIngredientForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          // Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  onSubmit() {
    this.ingredientService
      .getIngredientByName(this.name)
      .subscribe((ingredient) => {
        this.ingredient = ingredient;
        this.navigateToIngredient();
      });
  }

  navigateToIngredient() {
    const route = `/ingredients/${this.ingredient.id}`;
    this.router.navigate([route]);
  }

  get name() {
    return this.getIngredientForm.get('name')?.value;
  }
}
