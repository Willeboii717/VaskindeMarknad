import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customersService';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customers: Customer[] = []; // Use Customer type

  visible: boolean = false;

  constructor(private CustomersService: CustomersService) {}

  ngOnInit(): void {
    this.CustomersService.getAllCustomers()
    .subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }
}