import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employees } from 'src/app/shared/models/employees.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private urlAPI: string = 'http://localhost:9095'

  constructor(private http: HttpClient) { }

  public getEmployees = (): Observable<Employees[]> => {
    const url: string = `${this.urlAPI}/employees`
    return this.http.get<Employees[]>(url)
  }

  public postEmployees = (employee: Employees): Observable<Employees[]> => {
    const url: string = `${this.urlAPI}/employees`
    return this.http.post<Employees[]>(url, employee)
  }

  public putEmployees = (employeeUpdate: Employees, employee_id: number): Observable<Employees[]> => {
    const url: string = `${this.urlAPI}/employees/${employee_id}`
    return this.http.put<Employees[]>(url, employeeUpdate)
  }

  public deleteEmployees = (employee_id: number): Observable<Employees[]> => {
    const url: string = `${this.urlAPI}/employees/${employee_id}`
    return this.http.delete<Employees[]>(url)
  }
}
