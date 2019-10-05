import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Order } from 'src/app/shared/models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {

  private urlAPI: string = 'http://localhost:9095'

  constructor(private http: HttpClient) { }

  public getOrders = (): Observable<Order[]> => {
    const url: string = `${this.urlAPI}/order`
    return this.http.get<Order[]>(url)
  }

  public postOrder = (employee: Order): Observable<Order[]> => {
    const url: string = `${this.urlAPI}/order`
    return this.http.post<Order[]>(url, employee)
  }

  public putOrder = (employeeUpdate: Order, employee_id: number): Observable<Order[]> => {
    const url: string = `${this.urlAPI}/order/${employee_id}`
    return this.http.put<Order[]>(url, employeeUpdate)
  }

  public deleteOrder = (employee_id: number): Observable<Order[]> => {
    const url: string = `${this.urlAPI}/order/${employee_id}`
    return this.http.delete<Order[]>(url)
  }
}
