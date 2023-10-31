//Angular Imports
import { Component } from '@angular/core';

//Project Imports
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Customer } from 'src/app/interfaces/customer';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent { 

  constructor(LoginDialogComponent:LoginDialogComponent) {

  }
  pressedButton: boolean = false;

  showDialog: boolean = false;


  showLogInDialog() {
    console.log(LoginDialogComponent.getDialogStatus); //Fuck, fix this, call it good
    
    this.showDialog = true;
    console.log("Pressed", this.showDialog);
    
  }
}
