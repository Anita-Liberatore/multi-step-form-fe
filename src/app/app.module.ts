import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressStepperComponent } from './components/progress-stepper/progress-stepper.component';
import { FirstStepFormComponent } from './components/first-step/first-step-form.component';
import { SecondStepFormComponent } from './components/second-step/second-step-form.component';
import { MultiStepFormComponent } from './pages/multi-step-form/multi-step-form.component';
import { ThirdStepFormComponent } from './components/third-step/third-step-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressStepperComponent,
    FirstStepFormComponent,
    SecondStepFormComponent,
    ThirdStepFormComponent,
    MultiStepFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
