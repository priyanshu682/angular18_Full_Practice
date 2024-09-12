import { Injectable } from '@angular/core';
import { Constant } from '../Constant/Constant';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MasterService } from './master/master.service';
import { Department } from '../model/class/Customer';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  onRoleChange$: Subject<string> = new Subject<string>()
  role$: BehaviorSubject<string> = new BehaviorSubject("")

  constructor(private masterSrv: MasterService) { }

  getAllDept(): Observable<Department[]> {
    return this.masterSrv.get<Department[]>(Constant.API_URL + Constant.DEPARTMENT_METHODS.GET_PARENT_DEPT)
  }
  saveDept(obj: any) {
    return this.masterSrv.post(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS.ADD_DEPARTMENT}`, obj)
  }
  updateDept(obj: any) {
    return this.masterSrv.post(Constant.API_URL + Constant.DEPARTMENT_METHODS.UPDATE_DEPARTMENT, obj)
  }
  deleteDept(id: number) {
    return this.masterSrv.delete(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS.DELETE_DEPARTMENT}${id}`)
  }
}
