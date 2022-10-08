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
    this.router.navigate(['/admin/all-ingredients']);
  }

  onListApprovedIngredients() {
    this.router.navigate(['/admin/approved-ingredients']);
  }

  onListUnapprovedIngredients() {
    this.router.navigate(['/admin/unapproved-ingredients']);
  }

  onCreateIngredient() {
    this.router.navigate(['/admin/create-ingredient']);
  }

  onGetIngredient() {
    this.router.navigate(['/admin/get-ingredient']);
  }

  onUpdateIngredient() {
    this.router.navigate(['/admin/update-ingredient']);
  }

  onDeleteIngredient() {
    this.router.navigate(['/admin/delete-ingredient']);
  }

  onListAllRecipes() {
    this.router.navigate(['/admin/all-recipes']);
  }

  onListApprovedRecipes() {
    this.router.navigate(['/admin/approved-recipes']);
  }

  onListUnapprovedRecipes() {
    this.router.navigate(['/admin/unapproved-recipes']);
  }

  onCreateRecipe() {
    this.router.navigate(['/admin/create-recipe']);
  }

  onGetRecipe() {
    this.router.navigate(['/admin/get-recipe']);
  }

  onUpdateRecipe() {
    this.router.navigate(['/admin/update-recipe']);
  }

  onDeleteRecipe() {
    this.router.navigate(['/admin/delete-recipe']);
  }

  approveIngredient() {
    this.router.navigate(['/admin/approve-ingredient']);
  }

  approveRecipe() {
    this.router.navigate(['/admin/approve-recipe']);
  }
}
