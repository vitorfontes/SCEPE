import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from 'src/app/shared/models/login';

@Injectable({ providedIn: 'root' })
export class LoginService {

  private urlAPI: string = 'http://localhost:9095'

  constructor(private http: HttpClient) { }

  public login = (loginInfo: Login): Observable<{ auth: string, message: string, permission: string }> => {
    const url: string = `${this.urlAPI}/login`
    return this.http.post<{ auth: string, message: string, permission: string }>(url, loginInfo)
  }
}
