import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-ingredient-page',
  templateUrl: './crud-ingredient-page.component.html',
  styleUrls: ['./crud-ingredient-page.component.css'],
})
export class CrudIngredientPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCreate() {
    this.router.navigate(['/create-ingredient']);
  }

  onGet() {
    this.router.navigate(['/get-ingredient']);
  }

  onUpdate() {
    this.router.navigate(['/update-ingredient']);
  }

  onDelete() {
    this.router.navigate(['/delete-ingredient']);
  }
}
