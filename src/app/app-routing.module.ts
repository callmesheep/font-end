import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobComponent } from './components/job/job.component';
import { LoginComponent } from './login-user/login.component';
import { LoginEmployersComponent } from './login-employers/login-employers.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterEmployersComponent } from './register-employers/register-employers.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'job', component: JobComponent},
  {path:'login-user', component: LoginComponent},
  {path:'login-employers', component: LoginEmployersComponent},
  {path:'register-user', component: RegisterUserComponent},
  {path:'register-employers', component: RegisterEmployersComponent},
  {path:'user',component:UserComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
