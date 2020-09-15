import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home.component';
import { MealsComponent } from './meals/meals.component';
import { WorkingStepsComponent } from './working-steps/working-steps.component';
import { CitiesComponent } from './cities/cities.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [ServicesComponent, HomeComponent, MealsComponent, WorkingStepsComponent, CitiesComponent, FeedbackComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
