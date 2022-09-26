import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/core/models/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-search-ingredient',
  templateUrl: './search-ingredient.component.html',
  styleUrls: ['./search-ingredient.component.css'],
})
export class SearchIngredientComponent implements OnInit {
  searchForm!: FormGroup;
  ingredient!: Ingredient;
  errorMessage!: string;
  @Output() ingredientEvent = new EventEmitter<Ingredient>();

  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
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

  onAdd() {
    this.errorMessage = '';

    this.ingredientService.getIngredientByName(this.name).subscribe({
      next: (ingredient) => {
        this.ingredient = ingredient;
        this.ingredientEvent.emit(this.ingredient);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.errorMessage = 'Not found';
        }
      },
    });
  }

  get name() {
    return this.searchForm.get('name')?.value;
  }
}
