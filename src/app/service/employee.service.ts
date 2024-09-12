import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Constant } from '../Constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  http = inject(HttpClient)
  getAllEmployee() {
    return this.http.get(Constant.EMP_API_URL)
  }
}
