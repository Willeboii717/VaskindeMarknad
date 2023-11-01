//Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';

//Project Imports
import { loginCredentialsModel } from 'src/app/interfaces/customer';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})

export class LoginDialogComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private LoginService: LoginService,
  ){}


  ngOnInit(): void {
    this.createLoginForm();
  }


  loginForm!: FormGroup;
  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  loginSubmit() {
    const loginData: loginCredentialsModel = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.LoginService.login(loginData)
  }
    
}
