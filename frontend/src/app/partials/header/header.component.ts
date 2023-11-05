//Angular Imports
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
//Project Imports
import { RegistrationCustomerModel } from 'src/app/interfaces/customer';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DialogService]
})
export class HeaderComponent { 

  constructor(
    private dialogService: DialogService
    ) {}

  showDialog: boolean = false;

  ref: DynamicDialogRef | undefined;
  showLogInDialog() {
    this.dialogService.open(LoginDialogComponent, {});
  }
}
