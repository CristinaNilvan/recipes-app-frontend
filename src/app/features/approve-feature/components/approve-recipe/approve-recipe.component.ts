import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-approve-recipe',
  templateUrl: './approve-recipe.component.html',
  styleUrls: ['./approve-recipe.component.css'],
})
export class ApproveRecipeComponent implements OnInit {
  approveRecipeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.approveRecipeForm = this.formBuilder.group({
      id: [
        '',
        [Validators.required, Validators.pattern('^-?[0-9]+(?:.[0-9]{1,2})?$')],
      ],
    });
  }

  onSubmit() {
    this.recipeService
      .approveRecipe(parseInt(this.idFromForm))
      .subscribe((x) => console.log('approved recipe ' + this.idFromForm));
  }

  get idFromForm() {
    return this.approveRecipeForm.get('id')?.value;
  }
}
