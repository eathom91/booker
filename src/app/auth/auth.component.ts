import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  submitLabel = "Submit"
  constructor() { }

  getEmailErrorMessage() {

  }

  getPasswordErrorMessage() {

  }

  onSubmit() {

  }

  ngOnInit(): void {
  }

}
