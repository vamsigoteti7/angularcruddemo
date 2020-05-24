import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../Services/employee-service.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employee = {
    name: '',
    salary: '',
    age: '',
  };
  submitted = false;

  constructor(private http:HttpClient, private empService: EmployeeServiceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddEmployee() {
    const data = {
      name: this.employee.name,
      salary: this.employee.salary,
      age: this.employee.age,
    };
    this.empService.addEmployee(data).subscribe(
      data => {
        this.submitted = true;
        this.toastr.success('Employee Added Succesfully');
      },
      error => {
        console.log(error);
      }
    );
  }
}
