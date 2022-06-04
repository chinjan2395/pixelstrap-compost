import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public signup: boolean;
  public registraionForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    const url = this.route.snapshot.url;
    if (url[0].path === 'simple-register') {
      this.signup = true;
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
