import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginWithImageComponent } from './login-with-image/login-with-image.component';
import { LoginWithVideoComponent } from './login-with-video/login-with-video.component';
import { RegisterWithVideoComponent } from './register-with-video/register-with-video.component';
import { RegisterWithImageComponent } from './register-with-image/register-with-image.component';
import { UnlockUserComponent } from './unlockuser/unlockuser.component';
import { ForgotPwdComponent } from './forgotpwd/forgotpwd.component';
import { ResetPwdComponent } from './resetpwd/resetpwd.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [RegistrationComponent, LoginComponent, LoginWithImageComponent, LoginWithVideoComponent, RegisterWithVideoComponent, RegisterWithImageComponent, UnlockUserComponent, ForgotPwdComponent, ResetPwdComponent, ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
