import { Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/app/features/home-feature/models/feature';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css'],
})
export class FeatureCardComponent implements OnInit {
  @Input() feature!: Feature;

  constructor() {}

  ngOnInit(): void {}
}
