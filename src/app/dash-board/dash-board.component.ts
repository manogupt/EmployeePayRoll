import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employee';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  employee: Array<employee>=[
    {FullName:"Manoj"},
    {Gender:"Male"},
    {Department:"IT"},
    {ChooseYourSalary:"35000"},
    {StartDate:"8 January 2022"}
  ]
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('employees')) {
      this.employee = localStorage.getItem('employees');
      this.employee=JSON.parse(this.employee)
  }

  }
}
