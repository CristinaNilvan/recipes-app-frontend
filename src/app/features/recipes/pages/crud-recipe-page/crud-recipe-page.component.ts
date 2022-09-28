import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-recipe-page',
  templateUrl: './crud-recipe-page.component.html',
  styleUrls: ['./crud-recipe-page.component.css'],
})
export class CrudRecipePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCreate() {
    this.router.navigate(['/create-recipe']);
  }

  onGet() {
    this.router.navigate(['/get-recipe']);
  }

  onUpdate() {
    this.router.navigate(['/update-recipe']);
  }

  onDelete() {
    this.router.navigate(['/delete-recipe']);
  }
}
