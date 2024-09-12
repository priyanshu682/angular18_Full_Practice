import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: any = {
    EmailId: '',
    Password: ''
  }
  http = inject(HttpClient)
  router = inject(Router)
  // onLogin() {
  //   if (this.userObj.userName == 'admin' && this.userObj.password == '1234') {
  //     console.log("Login Success")
  //     alert("Login Success")
  //     localStorage.setItem('loginUser',this.userObj.userName)

  //     this.router.navigateByUrl('add-employee')
  //   } else {
  //     alert("Login Failed")
  //   }
  // }
  onLogin() {
    debugger
    this.http.post('https://projectapi.gerasim.in/api/UserApp/login', this.userObj).subscribe((res: any) => {
      if (res.result) {
        debugger
        console.log(res.message)
        alert(res.message)
        localStorage.setItem('loginUser', JSON.stringify(res.data)) 
        debugger
        this.router.navigateByUrl('add-employee')
      } else {
        alert(res.message)
        debugger

      }
    })

  }

}
