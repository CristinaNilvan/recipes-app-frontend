import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';

const modules = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class SharedModule {}
