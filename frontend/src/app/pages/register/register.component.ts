//Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';

//Project Imports
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from '../../services/customersService'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private CustomersService: CustomersService,
    private formBuilder: FormBuilder,
    ) 
  {
  }
  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    //validators needed
    this.registrationForm = this.formBuilder.group({
      username: new FormControl(''),
      email: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const customerData: Customer = this.registrationForm.value;
    this.CustomersService.createCustomer(customerData).subscribe(
        (response: any) => {
          console.log(response.msg);
          // dialog to return to previous page, and something
        },
        (error: any) => {
          console.error(error.msg);
          // red dialog, throw error, clear form and prompt reetrying
        }
      );
    }
  }
}
