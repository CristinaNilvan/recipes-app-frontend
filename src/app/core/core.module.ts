import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [NavbarComponent, NotFoundComponent, SidebarComponent],
  imports: [CommonModule, SharedModule],
  exports: [NavbarComponent, SidebarComponent],
})
export class CoreModule {}
