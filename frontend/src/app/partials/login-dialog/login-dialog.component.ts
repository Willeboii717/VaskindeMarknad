//Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validator, Validators } from '@angular/forms';

//Project Imports
import { loginCredentialsModel } from 'src/app/interfaces/customer';
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
    private LoginService: LoginService,
  ){}


  ngOnInit(): void {
    this.createLoginForm();
  }


  loginForm!: FormGroup;
  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
       ])
    });
  }

  isValidated(): boolean { //Checks if form is valid bu above validators
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
          console.log(response);
        },
        (error: any) => {
         //Working here
          this.errorText = error.error; // Update errorText with the error message from the backend
        }
      );
    }
  }
}