//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//primeNG
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

//Project
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { BookComponent } from './pages/book/book.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './partials/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginDialogComponent } from './partials/login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BookComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginDialogComponent,

  ],

  imports: [
    //Angular
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    //primeNG
    DialogModule,
    ButtonModule,
    StyleClassModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
