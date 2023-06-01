import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss']
})
export class MultiStepFormComponent {
  
  stepperNumber = 1;

  formChangeEvent(event: FormGroup) {
    if(!event.invalid) {
      this.stepperNumber++;
    } 
  }
  
  goBack(event: number) {
    this.stepperNumber = --event;
    console.log(this.stepperNumber)
  }
}
