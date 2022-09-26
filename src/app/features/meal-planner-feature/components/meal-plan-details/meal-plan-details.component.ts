import { Component, Input, OnInit } from '@angular/core';
import { MealPlan } from 'src/app/core/models/get-models/meal-plan';

@Component({
  selector: 'app-meal-plan-details',
  templateUrl: './meal-plan-details.component.html',
  styleUrls: ['./meal-plan-details.component.css'],
})
export class MealPlanDetailsComponent implements OnInit {
  @Input() mealPlan!: MealPlan;

  constructor() {}

  ngOnInit(): void {}
}
