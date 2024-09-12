import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  isDiv1Visible: boolean = true
  isDiv2Visible: boolean = true
  num1: string = ''
  num2: string = ''
  active: boolean = true
  btnName : string = "Show"
  selectedState: string =''
  cityName: string [] = ['Delhi','Pune','Kolkata','Mumbai','Chennai','Noida','Gurugram']
  studentList : any [] = [
    {id: 101, name: 'Priyanshu', city: 'Delhi',isActive:true},
    {id: 102, name: 'Rahul', city: 'Pune',isActive:false },
    { id: 103, name: 'Sagar', city: 'Kolkata', isActive: false },
    { id: 104, name: 'Raj', city: 'Mumbai', isActive: true },
    { id: 105, name: 'Shubham', city: 'Chennai', isActive: false },
    { id: 106, name: 'Rohit', city: 'Noida', isActive: true },
    { id: 107, name: 'Rishabh', city: 'Gurugram', isActive: false },

  ]
  constructor(private router: Router) {
  }
  navigateToAttribute(){
    this.router.navigateByUrl("attribute-directives")
  }
  hideDiv1() {
    this.isDiv1Visible = false
  }
  showDiv1() {
    this.isDiv1Visible = true
  }
  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible
    this.btnName = this.isDiv2Visible ? "Hide" : "Show"
  }
}
