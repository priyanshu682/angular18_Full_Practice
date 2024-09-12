import { Department } from "../class/Customer"

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}
export interface IDeptList {
  departmentId: number,
  departmentName: string,
  departmentLogo: string
}

export interface IDepartmentList {
  message: string
  result: boolean
  data: Department
}