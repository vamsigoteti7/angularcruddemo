import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../Services/employee-service.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee = {
    name: '',
    salary: '',
    age: '',
    id:''
  };
  submitted ='';

  constructor(private empService: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.employee.id = this.route.snapshot.paramMap.get('id'); 
    this.employee.name = this.route.snapshot.paramMap.get('name'); 
    this.employee.salary = this.route.snapshot.paramMap.get('salary'); 
    this.employee.age = this.route.snapshot.paramMap.get('age'); 
  }

  updateEmployee(){
    const data = {
      name: this.employee.name,
      salary: this.employee.salary,
      age: this.employee.age,
    };
    
    this.empService.updateEmployee(this.employee.id, data).subscribe(
      data => {
        this.toastr.success('Updated Succesfully');
        this.router.navigate(['']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
