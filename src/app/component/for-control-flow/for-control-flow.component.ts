import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for-control-flow.component.html',
  styleUrl: './for-control-flow.component.css'
})
export class ForControlFlowComponent {
  dayNumber = ''
  cityName: string[] = ['Delhi', 'Pune', 'Kolkata', 'Mumbai', 'Chennai', 'Noida', 'Gurugram']
  studentList: any[] = [
    { studId: 101, totalMarks: 88, studName: 'Priyanshu', gender: 'male', city: 'Delhi', isActive: true },
    { studId: 102, totalMarks: 40, studName: 'Tanya', gender: 'female', city: 'Pune', isActive: false },
    { studId: 103, totalMarks: 50, studName: 'Sagar', gender: 'male', city: 'Kolkata', isActive: false },
    { studId: 104, totalMarks: 62, studName: 'Raj', gender: 'male', city: 'Mumbai', isActive: true },
    { studId: 105, totalMarks: 45, studName: 'Shubham', gender: 'male', city: 'Chennai', isActive: false },
    { studId: 106, totalMarks: 70, studName: 'Rohini', gender: 'female', city: 'NostudIda', isActive: true },
    { studId: 107, totalMarks: 78, studName: 'Rishabh', gender: 'male', city: 'Gurugram', isActive: false },

  ]
}
