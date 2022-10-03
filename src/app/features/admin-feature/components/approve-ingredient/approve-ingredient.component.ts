import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-approve-ingredient',
  templateUrl: './approve-ingredient.component.html',
  styleUrls: ['./approve-ingredient.component.css'],
})
export class ApproveIngredientComponent implements OnInit {
  approveIngredientForm!: FormGroup;
  responseMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.approveIngredientForm = this.formBuilder.group({
      id: [
        '',
        [Validators.required, Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')],
      ],
    });
  }

  onSubmit() {
    this.ingredientService
      .approveIngredient(parseInt(this.idFromForm))
      .subscribe({
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.responseMessage = `Ingredient with id:${this.idFromForm} not found!`;
          }
        },
        complete: () =>
          (this.responseMessage = `Ingredient with id:${this.idFromForm} approved!`),
      });
  }

  get idFromForm() {
    return this.approveIngredientForm.get('id')?.value;
  }
}
