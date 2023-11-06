//Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

//PrimeNG Imports
import { DynamicDialogRef } from 'primeng/dynamicdialog';


//Project Imports
import { loginCredentialsModel } from 'src/app/interfaces/customer';
import { ToastService } from 'src/app/services/toast.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})

export class LoginDialogComponent implements OnInit {

  errorText: String = "";
  hasErrors: boolean = false;

  constructor(
    private formBuilder: FormBuilder,

    //Services
    private LoginService: LoginService,

    private ref: DynamicDialogRef
  ){}


  ngOnInit(): void {
    this.createLoginForm();
  }


  loginForm!: FormGroup;
  private createLoginForm() { //Form controls
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
       ])
    });
  }

  isValidated(): boolean { //Checks if form is valid by above validators
      if ( this.loginForm.invalid )
      {
        this.errorText = "Please fill all the fields";
        return true;        
      }
    else 
    {
      return false;
    }
  }

  loginSubmit() { //Runs validation and if true, sends http request through service
    const loginData: loginCredentialsModel = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.hasErrors = this.isValidated();
    if (this.hasErrors === false) {
      this.LoginService.login(loginData).subscribe(
        (response: any) => {
          this.ref.close('success'); //on 
        },
        (error: any) => {
          if (error.status === 401) {
            this.errorText = error.error;
            this.hasErrors = true;
            this.errorText = "Username or password is incorrect";
          }
        });
    }

  }


}