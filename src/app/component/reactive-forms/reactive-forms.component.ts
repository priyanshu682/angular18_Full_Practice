import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Constant } from '../../Constant/Constant';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    lastName: new FormControl(""),
    userName: new FormControl("example@123",[Validators.email]),
    city: new FormControl(""),
    state: new FormControl(""),
    zipCode: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
    isAcceptTerms: new FormControl(false,[Validators.required]),
  })
  formValue: any
  validationMessage = Constant.VALIDATION_MESSAGES
  constructor() { }

  onSubmit() {
    // console.log(this.studentForm.value)
    this.formValue = this.studentForm.value
  }
  onReset(){
    this.studentForm.reset()
  }
}
