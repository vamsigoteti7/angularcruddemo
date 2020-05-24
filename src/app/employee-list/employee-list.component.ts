import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../Services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: any;
  title = '';
  currentIndex = -1;

  constructor(private empService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.empService.getAllEmployees().subscribe(
      data => {
        this.employees = data;
      },
      error => { console.log(error) }
    );
  }

  editEmployee(employee) {
    
  }

  deleteEmployee(employee) {
    this.empService.deleteEmployee(36).subscribe(
      data => {
        console.log(data);
      },
      error => { console.log(error) }
    );
  }
}
