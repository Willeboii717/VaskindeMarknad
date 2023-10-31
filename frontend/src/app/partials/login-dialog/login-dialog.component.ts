//Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';

//Project Imports

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})

export class LoginDialogComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){}


  ngOnInit(): void {
    this.createLoginForm();
  }

  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }


  visible: boolean = false;
  getDialogStatus() {
    return this.visible
  }

  sendToConsole() {
    const loginData: String[] = this.loginForm.value;
    console.log(loginData);
    
  }
}
