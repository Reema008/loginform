import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { HttpClientModule } from '@angular/common/http';
import { FailComponent } from './fail/fail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent,
    FormComponent,
    PasswordComponent,
    TermsAndConditionsComponent,
    FailComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
