import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-with-image',
  templateUrl: './login-with-image.component.html',
  styleUrls: ['./login-with-image.component.scss']
})
export class LoginWithImageComponent implements OnInit {
  public signup: boolean;
  public registraionForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    const url = this.route.snapshot.url;
    if (url[0].path === 'login-with-background-image') {
      this.signup = false;
    }
  }

  ngOnInit(): void {
    this.registraionForm = this.formBuilder.group({
      // mobileNumber: [null, [Validators.required]]
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  }
  public toggle() {
    this.signup = !this.signup;
  }

}
