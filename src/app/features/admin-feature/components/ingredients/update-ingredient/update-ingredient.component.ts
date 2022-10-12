import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-update-ingredient',
  templateUrl: './update-ingredient.component.html',
  styleUrls: ['./update-ingredient.component.css'],
})
export class UpdateIngredientComponent implements OnInit {
  updateIngredientForm!: FormGroup;
  ingredient!: Ingredient;
  responseMessage: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.updateIngredientForm = this.formBuilder.group({
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
    this.ingredientService.getIngredientByName(this.name).subscribe({
      next: (ingredient) => {
        this.ingredient = ingredient;
        this.navigateToIngredient();
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.responseMessage = `Ingredient with name:${this.name} not found!`;
        }
      },
    });
  }

  navigateToIngredient() {
    const route = `/admin/update-ingredient/${this.ingredient.id}`;
    this.router.navigate([route]);
  }

  get name() {
    return this.updateIngredientForm.get('name')?.value;
  }
}
