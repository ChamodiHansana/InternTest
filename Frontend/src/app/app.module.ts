import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { CusAddEditComponent } from './customer/cus-add-edit/cus-add-edit.component';
import { RegisterComponent } from './login/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    CusAddEditComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    
    
    
  ],
  providers: [SharedService,AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }