import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Component({
  selector: 'app-get-ingredient',
  templateUrl: './get-ingredient.component.html',
  styleUrls: ['./get-ingredient.component.css'],
})
export class GetIngredientComponent implements OnInit {
  getIngredientForm!: FormGroup;
  ingredient!: Ingredient;
  responseMessage: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService,
    private notifierService: NotifierService
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
    this.ingredientService.getIngredientByName(this.name).subscribe({
      next: (ingredient) => {
        this.ingredient = ingredient;
        this.navigateToIngredient();
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.responseMessage = `Ingredient with name: ${this.name} not found!`;
          this.notifierService.showNotification(this.responseMessage);
        }
      },
    });
  }

  navigateToIngredient() {
    const route = `admin/ingredients/${this.ingredient.id}`;
    this.router.navigate([route]);
  }

  get name() {
    return this.getIngredientForm.get('name')?.value;
  }
}
