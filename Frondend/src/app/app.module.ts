import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SignformComponent } from './pages/signform/signform.component';
import { LoginComponent } from './pages/login/login.component';
import{FormsModule, ReactiveFormsModule}from '@angular/forms';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { BookpageComponent } from './pages/bookpage/bookpage.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';

import { EditComponent } from './pages/edit/edit.component'
import { SigninService } from './signin.service';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignformComponent,
    LoginComponent,
    AddbookComponent,
    BookpageComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ServiceService,SigninService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
