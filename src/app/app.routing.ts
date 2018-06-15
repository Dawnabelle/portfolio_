import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NavbarComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
