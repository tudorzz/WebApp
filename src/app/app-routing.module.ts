import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarsComponent } from './cars/cars.component';
import { FirstComponent } from './first/first.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: FirstComponent },
  { path: 'cars', component: CarsComponent },
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
