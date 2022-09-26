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

  onSubmit() {
    this.ingredientService
      .getIngredientByName(this.name)
      .subscribe((ingredient) => {
        if (ingredient === null) {
          console.log('null ing');
        }

        this.ingredient = ingredient;
      });
  }

  onAdd() {
    this.ingredientEvent.emit(this.ingredient);
  }

  get name() {
    return this.searchForm.get('name')?.value;
  }
}
