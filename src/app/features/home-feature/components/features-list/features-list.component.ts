import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/features/home-feature/models/feature';
import { FEATURES } from '../../features-data/features-data';

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.css'],
})
export class FeaturesListComponent implements OnInit {
  features: Feature[] = FEATURES;

  constructor() {}

  ngOnInit(): void {}
}
