import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, AsyncPipe, NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  courseName: string = 'Angular18 course'
  currentDate: Date = new Date()
  studentDetails: any = {
    rollNo: 32,
    name: 'Raj',
    city: 'Delhi',
    phone: ''
  }
  currentRole1: string = ""
  currentRole2: string = ""

  currentTime: Observable<Date> = new Observable<Date>
  constructor(private deptService: DepartmentService) {
    this.currentTime = interval(1000).pipe(map(() => new Date()))
    this.deptService.onRoleChange$.subscribe((res:string)=>{
      debugger
      this.currentRole1 = res
    })
    this.deptService.role$.subscribe((res: string)=>{
      debugger
      this.currentRole2 = res
    })

  }

}
