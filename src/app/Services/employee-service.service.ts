import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://dummy.restapiexample.com/api/v1';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get(`${baseUrl}/employees`);
  }

  addEmployee(data){
    return this.http.post<any>(`${baseUrl}/create` ,data);
  }

  updateEmployee(id,data){
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  deleteEmployee(id){
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }
}
