import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from '../app-routing.module';

const modules = [
  CommonModule,
  AppRoutingModule,
  FlexLayoutModule,
  MaterialModule,
  ReactiveFormsModule,
  InfiniteScrollModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class SharedModule {}
