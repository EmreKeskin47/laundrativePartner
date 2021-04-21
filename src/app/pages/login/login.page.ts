import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public pageTitle = 'laundrative partner';
  validations_form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(2), Validators.required])
      ),
    });
  }

  onSubmit(values) {
    this.authService.login(values.email, values.password).subscribe((res) => {
      if (res.token) {
        console.log('success');
        this.authService.setCredentials(
          values.email,
          values.password,
          res.token
        );
      } else {
        console.log('Login Failed');
      }
    });
    this.navigateToAccount();
  }

  navigateToSignup() {}

  navigateToAccount() {}

  //Error messages
  validation_messages = {
    email: [
      { type: 'required', message: 'email alanı boş bırakılamaz' },
      { type: 'pattern', message: 'lütfen geçerli bir mail adresi giriniz' },
    ],
    password: [
      { type: 'required', message: 'parola alanı boş bırakılamaz' },
      {
        type: 'minlength',
        message: 'parolanız en az 6 karakter uzunluğunda olmalı ',
      },
    ],
    matching_passwords: [{ type: 'areEqual', message: 'parola uyuşma hatası' }],
  };
}
