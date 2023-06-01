import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-step-form',
  templateUrl: './first-step-form.component.html',
  styleUrls: ['./first-step-form.component.scss'],
})
export class FirstStepFormComponent {

  @Output() private onFormGroupChange = new EventEmitter<any>();
  @Output() private onStepperChange = new EventEmitter<number>();

  submitted: boolean = false;

  personalInfoForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    phone: new FormControl('', [Validators.required])
  });

  onSubmit() {
    this.submitted = true;
    this.onFormGroupChange.emit(this.personalInfoForm);
    this.onStepperChange.emit();

    if(this.personalInfoForm.invalid) {
      this.personalInfoForm.markAllAsTouched();
    }
  }
}
