import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-features',
  templateUrl: './admin-features.component.html',
  styleUrls: ['./admin-features.component.css'],
})
export class AdminFeaturesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onListAllIngredients() {
    this.router.navigate(['/all-ingredients']);
  }

  onListApprovedIngredients() {
    this.router.navigate(['/approved-ingredients']);
  }

  onListUnapprovedIngredients() {
    this.router.navigate(['/unapproved-ingredients']);
  }

  onCreateIngredient() {
    this.router.navigate(['/create-ingredient']);
  }

  onGetIngredient() {
    this.router.navigate(['/get-ingredient']);
  }

  onUpdateIngredient() {
    this.router.navigate(['/update-ingredient']);
  }

  onDeleteIngredient() {
    this.router.navigate(['/delete-ingredient']);
  }

  onListAllRecipes() {
    this.router.navigate(['/all-recipes']);
  }

  onListApprovedRecipes() {
    this.router.navigate(['/approved-recipes']);
  }

  onListUnapprovedRecipes() {
    this.router.navigate(['/unapproved-recipes']);
  }

  onCreateRecipe() {
    this.router.navigate(['/create-recipe']);
  }

  onGetRecipe() {
    this.router.navigate(['/get-recipe']);
  }

  onUpdateRecipe() {
    this.router.navigate(['/update-recipe']);
  }

  onDeleteRecipe() {
    this.router.navigate(['/delete-recipe']);
  }

  approveIngredient() {
    this.router.navigate(['/approve-ingredient']);
  }

  approveRecipe() {
    this.router.navigate(['/approve-recipe']);
  }
}
