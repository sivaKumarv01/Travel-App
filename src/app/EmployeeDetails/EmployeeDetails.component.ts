import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-EmployeeDetails',
  templateUrl: './EmployeeDetails.component.html',
  styleUrls: ['./EmployeeDetails.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
EmployeeDetails=[
  {
  empid:101,
  fullName:"Sivakumar V",
  designation:"Software Developer",
  location:"Chennai",
  salary:50000
},
{
  "empid": 102,
  "fullName": "Madhesh N",
  "designation": "Database Administrator",
  "location": "New York",
  "salary": 75000
},
{
  "empid": 103,
  "fullName": "Kathiravan ",
  "designation": "UI/UX Designer",
  "location": "San Francisco",
  "salary": 60000
},
{
  "empid": 104,
  "fullName": "Dinesh",
  "designation": "Network Engineer",
  "location": "Mumbai",
  "salary": 55000
},
{
  "empid": 105,
  "fullName": "Kishore",
  "designation": "Business Analyst",
  "location": "London",
  "salary": 70000
}]
salary=true

salaryFunction()
{
  this.salary=!this.salary
  
}
}
