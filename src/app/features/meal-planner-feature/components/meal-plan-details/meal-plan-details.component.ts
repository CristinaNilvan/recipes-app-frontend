import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MealPlan } from 'src/app/core/models/meal-plan';
import { Recipe } from 'src/app/core/models/recipe';

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
