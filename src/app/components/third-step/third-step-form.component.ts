import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-third-step-form',
  templateUrl: './third-step-form.component.html',
  styleUrls: ['./third-step-form.component.scss'],
})
export class ThirdStepFormComponent implements OnInit {

  @Output() private onBack = new EventEmitter<number>();

  addons = [
    {
      name : "Online services",
      description: "Access to multiplayer games",
      selected: false,
      monthlyPrice: 1,
      yearlyPrice: 10
    },
    {
      name : "Larger Storage",
      description: "Extra 1TB of cloud save",
      selected: false,
      monthlyPrice: 2,
      yearlyPrice: 20
    },
    {
      name : "Customizable profile",
      description: "Custom theme on your profile",
      selected: false,
      monthlyPrice: 2,
      yearlyPrice: 20
    }
  ]


  ngOnInit(): void {
  }


  nextStep(){

   
    
  }

  toggleAddon(index : number){
    this.addons[index].selected = !this.addons[index].selected;
  }

  goBack() {
    this.onBack.emit();
  }

 

}
