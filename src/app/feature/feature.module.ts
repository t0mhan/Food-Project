import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FeatureComponent } from './feature.component';


@NgModule({
  declarations: [SignupComponent, ContactComponent, LoginComponent, FeatureComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
