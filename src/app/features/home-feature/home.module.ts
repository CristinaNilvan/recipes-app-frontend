import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesListComponent } from './components/features-list/features-list.component';

@NgModule({
  declarations: [HomeComponent, FeatureCardComponent, FeaturesListComponent],
  imports: [CommonModule, CoreModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
