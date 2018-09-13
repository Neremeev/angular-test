import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {CarPageComponent} from './car-page/car-page.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "./auth.guard.service";

// на странице будет только индив страница машины
// const appRoutes: Routes = [
//   { path: 'cars', component: CarsPageComponent },
//   { path: 'cars/:id/:name', component: CarPageComponent },
//   { path: '', component: HomePageComponent },
//    редирект
//    { path: 'not-found', component: NotFoundComponent},
//    { path: '**', redirectTo: '/not-found'}
// ];

// на странице будет список машин + сама машина
const appRoutes: Routes = [
  { path: 'cars', component: CarsPageComponent, canActivate: [AuthGuard], children: [
    { path: ':id/:name', component: CarPageComponent }
  ] },
  { path: '', component: HomePageComponent },
  // всегда в конце 404
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}