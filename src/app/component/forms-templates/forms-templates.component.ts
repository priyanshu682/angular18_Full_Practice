import { Constant } from './../../Constant/Constant';
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../model/class/Customer';

@Component({
  selector: 'app-forms-templates',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './forms-templates.component.html',
  styleUrl: './forms-templates.component.css'
})
export class FormsTemplatesComponent {
  // studentObj: any = {
  //   firstName: '',
  //   lastName: '',
  //   userName: '',
  //   city: '',
  //   state: '',
  //   zipCode: '',
  //   isAcceptTerms: false
  // }
  studentObj : Student = new Student()
  formValue: any
  validationMessage = Constant.VALIDATION_MESSAGES


  onSubmit() {
    debugger
    this.formValue = this.studentObj
  }
  resetForm(){
    // this.studentObj = {
    //   firstName: '',
    //   lastName: '',
    //   userName: '',
    //   city: '',
    //   state: '',
    //   zipCode: '',
    //   isAcceptTerms: false
    // }
    this.studentObj = new Student()
  }
}
