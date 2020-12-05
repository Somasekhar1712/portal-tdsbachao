import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



import { UserResolver } from './components/dashboard/user.resolver';
import { AuthGuard } from './core/auth.guard';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  // { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  // { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  { path: 'login', component: SignInComponent, canActivate: [AuthGuard] },
  { path: 'register', component: SignUpComponent, canActivate: [AuthGuard] },
  { path: 'user', component: DashboardComponent,  resolve: { data: UserResolver}}
];
