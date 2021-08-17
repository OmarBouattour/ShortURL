import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UrlComponent } from './url/url.component';
import { AuthGuard } from './auth.guard';
import { StatComponent } from './stat/stat.component';



const routes: Routes = [
  {path: '', redirectTo:'/login',pathMatch:'full'},
  {path: 'register', component: RegisterComponent},

  {path: 'login', component: LoginComponent},
  {path: 'url', component: UrlComponent,canActivate: [AuthGuard]},
  {path: 'stats', component: StatComponent,canActivate: [AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
