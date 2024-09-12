export class Customer{
  custId: number
  name: string
  address?: string
  mobile: string
  emailId:string

  constructor(){
    this.custId = 0
    this.name = ""
    this.mobile = ""
    this.emailId = ""
  }
}

export class Department{
  departmentId: number;
  departmentName: string;
  departmentLogo: string;

  constructor() {
    this.departmentId = 0;
    this.departmentName = "";
    this.departmentLogo = "";
  }

}

export class Student{
  firstName:string
  lastName:string
  userName:string
  city:string
  state:string
  zipCode:string
  isAcceptTerms:boolean
  constructor(){
    this.firstName = ""
    this.lastName = ""
    this.userName = ""
    this.city = ""
    this.state = ""
    this.zipCode = ""
    this.isAcceptTerms = false
  }
}