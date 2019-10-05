import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contacts } from 'src/app/shared/models/contacts.model';

@Injectable({ providedIn: 'root' })
export class ContactService {

  private urlAPI: string = 'http://localhost:9095'

  constructor(private http: HttpClient) { }

  public getContacts = (): Observable<Contacts[]> => {
    const url: string = `${this.urlAPI}/contacts`
    return this.http.get<Contacts[]>(url)
  }

  public postContact = (contact: Contacts): Observable<Contacts[]> => {
    const url: string = `${this.urlAPI}/contacts`
    return this.http.post<Contacts[]>(url, contact)
  }

  public putContact = (contactUpdate: Contacts, contact_id: number): Observable<Contacts[]> => {
    const url: string = `${this.urlAPI}/contacts/${contact_id}`
    return this.http.put<Contacts[]>(url, contactUpdate)
  }

  public deleteContact = (contact_id: number): Observable<Contacts[]> => {
    const url: string = `${this.urlAPI}/contacts/${contact_id}`
    return this.http.delete<Contacts[]>(url)
  }
}
