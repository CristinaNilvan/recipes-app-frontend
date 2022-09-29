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
      .subscribe((x) => console.log('approved ingredient ' + this.idFromForm));
  }

  get idFromForm() {
    return this.approveIngredientForm.get('id')?.value;
  }
}
