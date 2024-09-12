import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directives',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {
  div1BgColor: string = 'bg-danger'
  isDiv2Active: boolean = false
  btnName: string = 'Success'
  num1 = ''
  num2 = ''
  isChecked : boolean = true
  cityName: string[] = ['Delhi', 'Pune', 'Kolkata', 'Mumbai', 'Chennai', 'Noida', 'Gurugram']
  studentList: any[] = [
    { id: 101,totalMarks : 88, name: 'Priyanshu', gender: 'male', city: 'Delhi', isActive: true },
    { id: 102,totalMarks : 40, name: 'Tanya', gender: 'female', city: 'Pune', isActive: false },
    { id: 103,totalMarks : 50, name: 'Sagar', gender: 'male', city: 'Kolkata', isActive: false },
    { id: 104,totalMarks : 62, name: 'Raj', gender: 'male', city: 'Mumbai', isActive: true },
    { id: 105,totalMarks : 45, name: 'Shubham', gender: 'male', city: 'Chennai', isActive: false },
    { id: 106,totalMarks : 70, name: 'Rohini', gender: 'female', city: 'Noida', isActive: true },
    { id: 107,totalMarks : 78, name: 'Rishabh', gender: 'male', city: 'Gurugram', isActive: false },

  ]

  div1Red() {
    this.div1BgColor = 'bg-danger'
  }
  div1Blue() {
    this.div1BgColor = 'bg-primary'
  }
  toggleColor() {
    this.isDiv2Active = !this.isDiv2Active
    this.btnName = this.isDiv2Active ? 'Success' : 'Warning'
  }
}
