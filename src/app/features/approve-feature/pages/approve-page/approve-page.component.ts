import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-page',
  templateUrl: './approve-page.component.html',
  styleUrls: ['./approve-page.component.css'],
})
export class ApprovePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  approveIngredient() {
    this.router.navigate(['/approve-ingredient']);
  }

  approveRecipe() {
    this.router.navigate(['/approve-recipe']);
  }
}
