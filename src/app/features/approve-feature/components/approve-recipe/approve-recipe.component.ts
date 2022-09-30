import { HttpErrorResponse } from '@angular/common/http';
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
  responseMessage: string = '';

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
    this.recipeService.approveRecipe(parseInt(this.idFromForm)).subscribe({
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.responseMessage = `Recipe with id:${this.idFromForm} not found!`;
        }
      },
      complete: () =>
        (this.responseMessage = `Recipe with id:${this.idFromForm} approved!`),
    });
  }

  get idFromForm() {
    return this.approveRecipeForm.get('id')?.value;
  }
}
