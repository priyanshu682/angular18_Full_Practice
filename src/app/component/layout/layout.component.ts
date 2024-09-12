import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent{
  selectedRole: string = ''
  router = inject(Router)
  loggedUserData: any
  constructor(private deptService: DepartmentService) {
    const loggedData = localStorage.getItem('loginUser')
    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData)
    }
  }
  logOff() {
    const isLogout = confirm("Are you sure you want to logout")
    if (isLogout) {
      debugger
      localStorage.removeItem('loginUser')
      debugger
      this.router.navigateByUrl('login')
    } else {
      alert("Logout cancelled")
    }
  }
  onRoleChange(role: string) {
    debugger
    this.deptService.onRoleChange$.next(role)
    debugger
    this.deptService.role$.next(role)
  }
  
}
