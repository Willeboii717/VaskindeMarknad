//Angular Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

//Project Imports
import { RegistrationCustomerModel, loginCredentialsModel } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL = "http://localhost:5000/api/"
  loginCredentialModels: loginCredentialsModel[] = [];
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuth$ = this.isAuthSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }
  


  login(loginCredentials: loginCredentialsModel): Observable<any> {
    return this.http.post(this.baseURL + 'loginUser', loginCredentials).pipe(
    );
  }

  setIsAuth(value: boolean) {
    this.isAuthSubject.next(value);
  }

  logOut() {
    this.setIsAuth(false);
  }

}
