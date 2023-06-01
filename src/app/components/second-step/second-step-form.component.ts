import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-step-form',
  templateUrl: './second-step-form.component.html',
  styleUrls: ['./second-step-form.component.scss'],
})
export class SecondStepFormComponent implements OnInit {

  @Output() private onBack = new EventEmitter<number>();
  @Output() private onStepperChange = new EventEmitter<number>();
  @Output() private onFormGroupChange = new EventEmitter<any>();

  plans = [
    {
      name: 'Arcade',
      icon: '../../assets/images/icon-arcade.svg',
      monthlyPrice: 9,
      yearlyPrice: 90,
      yearlyOffer: '2 months free',
    },
    {
      name: 'Advanced',
      icon: '../../assets/images/icon-advanced.svg',
      monthlyPrice: 12,
      yearlyPrice: 120,
      yearlyOffer: '2 months free',
    },
    {
      name: 'Pro',
      icon: '../../assets/images/icon-pro.svg',
      monthlyPrice: 15,
      yearlyPrice: 150,
      yearlyOffer: '2 months free',
    },
  ];

  yearlyPlanSelected: boolean = false;
  planSelected!: any;
  flagErrorPlainInfoForm: boolean = false

  planInfoForm = new FormGroup({
    planType: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  displayYearlyPlanType() {
    this.yearlyPlanSelected = !this.yearlyPlanSelected;
  }

  selectPlanType(plan: any) {
    this.flagErrorPlainInfoForm = this.planInfoForm.invalid ? false : true;
    if(plan) {
      this.planSelected = plan;

      this.planInfoForm.patchValue({
        planType: this.planSelected,
      });
      
      console.log(this.planInfoForm)
    }
    

  }

  onSubmit() {    
    this.onFormGroupChange.emit(this.planInfoForm)
    this.onStepperChange.emit();

    this.planInfoForm.patchValue({
      planType: this.planSelected,
    });

    this.flagErrorPlainInfoForm = this.planInfoForm.invalid ? true : false;
    
  }

  goBack() {
    this.onBack.emit();
  }
}
