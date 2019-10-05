import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { InventoryControl } from 'src/app/shared/models/inventory-control.model';

@Injectable({ providedIn: 'root' })
export class InventoryControlService {

  private urlAPI: string = 'http://localhost:9095'

  constructor(private http: HttpClient) { }

  public getInvetoryControl = (): Observable<InventoryControl[]> => {
    const url: string = `${this.urlAPI}/inventory`
    return this.http.get<InventoryControl[]>(url)
  }

  public postInventoryControl = (inventory: InventoryControl): Observable<InventoryControl[]> => {
    const url: string = `${this.urlAPI}/inventory`
    return this.http.post<InventoryControl[]>(url, inventory)
  }

  public putInventoryControl = (inventoryUpdate: InventoryControl, inventory_id: number): Observable<InventoryControl[]> => {
    const url: string = `${this.urlAPI}/inventory/${inventory_id}`
    return this.http.put<InventoryControl[]>(url, inventoryUpdate)
  }

  public deleteInventoryControl = (inventory_id: number): Observable<InventoryControl[]> => {
    const url: string = `${this.urlAPI}/inventory/${inventory_id}`
    return this.http.delete<InventoryControl[]>(url)
  }
}
