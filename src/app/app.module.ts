import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JobComponent } from './components/job/job.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login-user/login.component';
import { LoginEmployersComponent } from './login-employers/login-employers.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterEmployersComponent } from './register-employers/register-employers.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginEmployersComponent,
    RegisterUserComponent,
    RegisterEmployersComponent,
    SearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
