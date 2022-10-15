import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/core/models/get-models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Component({
  selector: 'app-approve-ingredient',
  templateUrl: './approve-ingredient.component.html',
  styleUrls: ['./approve-ingredient.component.css'],
})
export class ApproveIngredientComponent implements OnInit {
  approveIngredientForm!: FormGroup;
  ingredient!: Ingredient;
  unapprovedIngredients: Ingredient[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;
  responseMessage: string = '';
  ingredientsResponseMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.getIngredients();

    this.approveIngredientForm = this.formBuilder.group({
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

  getIngredients() {
    this.ingredientsResponseMessage = '';

    this.ingredientService
      .getUnapprovedIngredients(this.pageNumber, this.pageSize)
      .subscribe({
        next: (ingredients) => (this.unapprovedIngredients = ingredients),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.ingredientsResponseMessage = 'No more ingredients!';
          }
        },
      });
  }

  onScroll() {
    this.ingredientsResponseMessage = '';

    this.ingredientService
      .getUnapprovedIngredients(++this.pageNumber, this.pageSize)
      .subscribe({
        next: (ingredients) => this.unapprovedIngredients.push(...ingredients),
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.ingredientsResponseMessage = 'No more ingredients!';
          }
        },
      });
  }

  onSubmit() {
    this.responseMessage = '';

    this.ingredientService.getIngredientByName(this.name.trim()).subscribe({
      next: (ingredient) => {
        this.ingredient = ingredient;
        this.approveIngredient();
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.responseMessage = `Ingredient with name: ${this.name} not found!`;
          this.notifierService.showNotification(this.responseMessage);
        }
      },
    });
  }

  approveIngredient() {
    this.ingredientService.approveIngredient(this.ingredient.id).subscribe({
      complete: () => {
        this.responseMessage = `Ingredient with name: ${this.name} approved!`;
        this.notifierService.showNotification(this.responseMessage);
      },
    });
  }

  get name() {
    return this.approveIngredientForm.get('name')?.value;
  }
}
