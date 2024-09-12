import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { ReButtonComponent } from '../../../reusableComponent/re-button/re-button.component';
import { Department } from '../../../model/class/Customer';
import { IDeptList } from '../../../model/interface/IUser';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe, AlertComponent, ReButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {
  deptObj: Department = new Department()
  deptList: IDeptList[] = []

  ngOnInit(): void {
    this.getAllDepartment()
  }
  onEdit(data: any) {
    this.deptObj = data
  }
  deptSrv = inject(DepartmentService)
  constructor(private http: HttpClient) { }

  // onSave() {
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {
  //     if (res.result) {
  //       alert(res.message)
  //       this.getAllDepartment()
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }
  // getAllDepartment() {
  //   this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment').subscribe((res: any) => {
  //     if (res.result) {
  //       this.deptList = res.data
  //     } else {
  //       alert("API Call failed")
  //     }
  //   })
  // }
  // onUpdate() {
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
  //     if (res.result) {
  //       alert(res.message)
  //       this.getAllDepartment()
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }

  // onDelete(id: number) {
  //   debugger
  //   const isDelete = confirm('Are you sure you want to delete!!')
  //   if (isDelete) {
  //     this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res: any) => {
  //       debugger
  //       if (res.result) {
  //         alert(res.message)
  //         this.getAllDepartment()
  //         debugger
  //       } else {
  //         alert("Delete operation failed")
  //       }
  //     })
  //   }
  // }

  onReset(){
    this.deptObj.departmentId = 0
    this.deptObj.departmentName = ''
    this.deptObj.departmentLogo = ''
  }

  getAllDepartment() {
    debugger
    this.deptSrv.getAllDept().subscribe((res: any) => {
      debugger
      if (res.result) {
        debugger
        this.deptList = res.data
        debugger
      } else {
        alert("API Call failed")
      }
    })
  }
  onSave() {
    this.deptSrv.saveDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message)
        this.getAllDepartment()
      } else {
        alert(res.message)
      }
    })
  }
  getData(data: any) {
    debugger
    console.log(data)
    debugger
  }
  onUpdate() {
    this.deptSrv.updateDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message)
        this.getAllDepartment()
      } else {
        alert(res.message)
      }
      this.onReset()
    })
  }
  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete!!')
    if (isDelete) {
      this.deptSrv.deleteDept(id).subscribe((res: any) => {
        if (res.result) {
          alert(res.message)
          this.getAllDepartment()
          debugger
        } else {
          alert("Delete operation failed")
        }
      })
    }
  }
}