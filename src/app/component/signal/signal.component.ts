import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName = signal("Priyanshu")
  lastName = signal("Aggarwal")
  courseName :string = "Angular 18"
  duration = signal<number>(10)
  fullName = computed(()=>`${this.firstName()} ${this.lastName()}`)
  cityList = signal(["Pune","Mumbai"])
  studentObj = signal({
    name:"Priyanshu",
    age:25,
    city:"Delhi",
  })
  currentRole1 : string = ''
  currentRole2: string = ''

  constructor(private deptService : DepartmentService) {
    const value = this.firstName()
    setTimeout(()=>{
      this.duration.set(12)
      this.courseName = "React.Js"
    },5000)
    console.log(value)
    this.deptService.onRoleChange$.subscribe((res:string)=>{
      debugger
      this.currentRole1 = res
    })
    this.deptService.role$.subscribe((res: string) => {
      debugger
      this.currentRole2 = res
    })
  }
  changeFirstName(){
    this.firstName.set("Ravi")
  }
  changeLastName(){
    this.lastName.set("Kishan")
  }
  addCity(){
    this.cityList.set([...this.cityList(), "Nashik"])
  }
  changeStudentCity(){
    this.studentObj.set({...this.studentObj(), city:"Mumbai"})
  }
}
