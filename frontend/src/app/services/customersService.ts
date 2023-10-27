import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from "../interfaces/customer";

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  private baseURL = "http://localhost:5000/api/"
  customers: Customer[] = [];

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseURL + 'getCustomers');
  }

  createCustomer(customerData: Customer): Observable<Customer> {
    console.log(customerData);
    
    return this.http.post<Customer>(this.baseURL + "createCustomer", customerData);
  }

}

