import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { CommonModule } from '@angular/common';
import { IUser } from '../../model/interface/IUser';
import { DisableCopyDirective } from '../../shared/disable-copy.directive';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,DisableCopyDirective],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit {
  // userList: any[] = []
  userList = signal<IUser[]>([])
  courseName: string = "HTML"
  empService = inject(EmployeeService)
  // constructor(private cdRef:ChangeDetectorRef) { }
  ngOnInit(): void {
    debugger
    this.loadUsers()
    // setTimeout(()=>{
    //   debugger
    //   this.cdRef.detectChanges()
    // },5000)
    debugger
  }
  loadUsers() {
    this.empService.getAllEmployee().subscribe((res: any) => {
      debugger
      this.userList.set(res)
      this.courseName = "JAVA"
      debugger
    })
  }
  // reloadUI(){

  // }
}
