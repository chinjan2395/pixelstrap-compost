import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWithImageComponent } from './login-with-image/login-with-image.component';
import { LoginWithVideoComponent } from './login-with-video/login-with-video.component';
import { LoginComponent } from './login/login.component';
import { RegisterWithImageComponent } from './register-with-image/register-with-image.component';
import { RegisterWithVideoComponent } from './register-with-video/register-with-video.component';
import { RegistrationComponent } from './registration/registration.component';
import { UnlockUserComponent } from './unlockuser/unlockuser.component';
import { ResetPwdComponent } from './resetpwd/resetpwd.component';
import { ForgotPwdComponent } from './forgotpwd/forgotpwd.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'simple-login',
        component: LoginComponent,
      },
      {
        path: 'login-with-background-image',
        component: LoginWithImageComponent,

      },
      {
        path: 'login-with-background-video',
        component: LoginWithVideoComponent
      },
      {
        path: 'simple-register',
        component: RegistrationComponent,
      },
      {
        path: 'register-with-background-image',
        component: RegisterWithImageComponent
      },
      {
        path: 'register-with-background-video',
        component: RegisterWithVideoComponent
      },
      {
         path: 'unlock-user',
         component: UnlockUserComponent
       },
       {
         path: 'forgot-password',
         component: ForgotPwdComponent
       },
       {
         path: 'reset-password',
         component: ResetPwdComponent
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
