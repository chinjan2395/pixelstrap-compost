import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/firebase/auth.service';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public newUser = false;
  public signup: boolean;
  public user: firebase.User;
  public loginForm: FormGroup;
  public registraionForm: FormGroup;

  public formErrors: FormErrors = {
    'email': '',
    'password': '',
  };

  public errorMessage: any;

  constructor(public authService: AuthService, private fb: FormBuilder,
    private route: ActivatedRoute) {
      const url = this.route.snapshot.url;
      if (url[0].path === 'simple-login') {
        this.signup = false;
      }
      this.registraionForm = this.fb.group({
        // mobileNumber: [null, [Validators.required]]
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
      this.loginForm = fb.group({
        email: ['test@gmail.com', [Validators.required, Validators.email]],
        password: ['test123', Validators.required]
      });
  }

  ngOnInit() {
  }

  public toggle() {
    this.signup = !this.signup;
  }

  // Login With Google
  loginGoogle() {
    this.authService.GoogleAuth();
  }

  // Login With Twitter
  loginTwitter(): void {
    this.authService.signInTwitter();
  }

  // Login With Facebook
  loginFacebook() {
    this.authService.signInFacebok();
  }

  // Simple Login
  login(l) {
    this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password']);
  }

}
