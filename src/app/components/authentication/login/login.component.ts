import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signup: boolean;
  public registraionForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    const url = this.route.snapshot.url;
    if (url[0].path === 'simple-login') {
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
