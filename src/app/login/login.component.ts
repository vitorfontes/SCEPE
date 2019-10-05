import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../shared/models/login';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.generateLoginForm()
  }

  private generateLoginForm = (): void => {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      senha: [null, Validators.required]
    })
  }

  public login = (): void => {
    let loginInfo: Login = this.loginForm.getRawValue()

    this.loginService.login(loginInfo).subscribe(
      authInfos => {
        if (authInfos.auth) {
          this.navigate()
        } else {
          this.loginForm.reset()
          alert(authInfos.message)
        }
      },
      err => console.log(err),
      () => { }
    )
  }

  public navigate = () => this.router.navigate(['homepage'])

}
