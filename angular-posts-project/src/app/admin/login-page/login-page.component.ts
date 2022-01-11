import { Component, OnInit } from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  getEmail() {
    return this.form.get('email')!
  }

  getPassword() {
    return this.form.get('password')!
  }

  getEmailError() {
    return this.getEmail().errors!
  }

  getPasswordError() {
    return this.getPassword().errors!
  }


  submit() {
    console.log(this.form)
    if (this.form.invalid) {
      return
    }
  }
}
