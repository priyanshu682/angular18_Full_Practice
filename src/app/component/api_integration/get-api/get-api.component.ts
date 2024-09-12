import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { Customer } from '../../../model/class/Customer';
import { IUser } from '../../../model/interface/IUser';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  http = inject(HttpClient)
  userList: IUser[] = []
  customerList: Customer[] = []

  // constructor(private http: HttpClient ) {}
  getAllUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {

      this.userList = result

    })
  }
  getAllCustomers() {
    this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((res: any) => {
      debugger
      this.customerList = res.data
      debugger
    }, error => {
      debugger;
    })

  }
}
