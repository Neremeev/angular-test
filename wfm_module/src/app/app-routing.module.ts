import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  // Lazy loading строка, гвард в этом случае будет называтся CanLoad
  { path: 'cars', loadChildren: './cars-page/cars.module#CarsModule' }
];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}

// Используем PreLoading
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
