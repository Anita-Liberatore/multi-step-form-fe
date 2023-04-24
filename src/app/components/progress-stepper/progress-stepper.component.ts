import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-progress-stepper',
  templateUrl: './progress-stepper.component.html',
  styleUrls: ['./progress-stepper.component.scss'],
})
export class ProgressStepperComponent {

  @Input() currentStepperProgress!: number;

  constructor() {}

  stepperData = [
    {
      numberStepper: 1,
      stepperTitle: 'STEP 1',
      stepperInfo: 'YOUR INFO',
    },
    {
      numberStepper: 2,
      stepperTitle: 'STEP 2',
      stepperInfo: 'SELECT PLAN',
    },
    {
      numberStepper: 3,
      stepperTitle: 'STEP 3',
      stepperInfo: 'ADD-ONS',
    },
    {
      numberStepper: 4,
      stepperTitle: 'STEP 4',
      stepperInfo: 'SUMMARY',
    },
    
  ];
}
