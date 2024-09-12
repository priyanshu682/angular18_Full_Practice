import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // data-types : string, number, boolean, date

  courseName: string = "Angular18"
  stateName: string = "UP"
  inputType = "checkbox"
  classType: string = "radio"
  rollNumber: number = 1
  isChecked: boolean = true
  firstName = signal("Priyanshu Aggarwal")
  constructor() {

  }
  showAlert(message: string) {
    alert(message)
  }
  changeCourseName() {
    this.courseName = "React.js"
    this.firstName.set("New Name")
  }
}
