import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  title = 'EmployeePayroll';
  employee: any ;

  emppayrollForm = new FormGroup({
    FullName : new FormControl(''),
    ProfileImage : new FormControl (''),
    Gender : new FormControl(''),
    Department : new FormControl(''),
    ChooseYourSalary : new FormControl(''),
    StartDate : new FormControl(''),
    Notes : new FormControl(''),
    Cancel : new FormControl(''),
    Submit : new FormControl(''),
    Reset : new FormControl(''),
})

empUser(){
  debugger
  console.warn(this.emppayrollForm.value);
  this.employee = Object.assign(this.employee, this.emppayrollForm.value);
  localStorage.setItem('employees', JSON.stringify(this.employee));

  if (localStorage.getItem('employees')) {
    this.employee = localStorage.getItem('employees');
    this.employee=JSON.parse(this.employee)
  }

  }

}

