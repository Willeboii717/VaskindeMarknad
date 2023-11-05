//Angular Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Project Imports
import { RegistrationCustomerModel, loginCredentialsModel } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL = "http://localhost:5000/api/"
  loginCredentialModels: loginCredentialsModel[] = [];

  constructor(
    private http: HttpClient
  ) { }
  
  login(loginCredentials: loginCredentialsModel): Observable<any> {
    return this.http.post(this.baseURL + 'loginCustomer', loginCredentials).pipe(
    );
  }
}
