import { Component } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent { 
  isLoggedIn: boolean = false;

}
