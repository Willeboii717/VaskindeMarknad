//Angular Imports
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
//Project Imports
import { RegistrationCustomerModel } from 'src/app/interfaces/customer';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component'; 
import { ToastService } from 'src/app/services/toast.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DialogService]
})
export class HeaderComponent { 
  isAuth: boolean = false;

  constructor(
    //Services
    private loginService: LoginService,
    private dialogService: DialogService,
    private toastSerivce: ToastService
    ) {}

  ngOnInit() {
    this.loginService.isAuth$.subscribe((isAuth) => {
      this.isAuth = isAuth; // Update isAuth in the header component
    });
  }
  

  showDialog: boolean = false;

  showLoginDialog() {
    const ref = this.dialogService.open(LoginDialogComponent, {});

    ref.onClose.subscribe((result) => {
      if (result === 'success') {
        this.toastSerivce.showSuccessToast('Login successful!');
      }
    });
  }

  logOutButton() {
    this.loginService.logOut();
    this.toastSerivce.showSuccessToast('Logged out')
  }
}
