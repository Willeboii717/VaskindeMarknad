//Angular Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Project Imports
import { RegistrationCustomerModel } from "../interfaces/customer";

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  private baseURL = "http://localhost:5000/api/"
  customers: RegistrationCustomerModel[] = [];

  constructor(
    private http: HttpClient
    ) { }

  createCustomer(customerData: RegistrationCustomerModel): Observable<RegistrationCustomerModel> {
    return this.http.post<RegistrationCustomerModel>(this.baseURL + "createCustomer", customerData);
  }
}

