import { Component } from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
