//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//primeNG
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

//Project
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { BookComponent } from './pages/book/book.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './partials/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginDialogComponent } from './partials/login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    DynamicDialogModule,
    ButtonModule,
    StyleClassModule,
    InputTextModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
