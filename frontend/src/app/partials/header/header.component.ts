//Angular Imports
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
//Project Imports
import { RegistrationCustomerModel } from 'src/app/interfaces/customer';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component'; 
import { ToastService } from 'src/app/service/toast.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DialogService]
})
export class HeaderComponent { 

  constructor(
    //Services
    private dialogService: DialogService,
    private toastSerivce: ToastService
    ) {}

  showDialog: boolean = false;

  showLoginDialog() {
    const ref = this.dialogService.open(LoginDialogComponent, {});

    ref.onClose.subscribe((result) => {
      if (result === 'success') {
        this.toastSerivce.showSuccessToast('Login successful!');
      }
    });
  }
}
