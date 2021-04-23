import { Calisan } from './../../models/calisan';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  info: boolean = false;
  billInfo: boolean = false;
  userInfo: boolean = false;
  employeeList: Calisan[] = [];
  edit: boolean = false;
  addEmploye: boolean = false;
  validations_form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    let temp1 = new Calisan(
      'Mehmet Ali Ehliz',
      'muhabbet4242@gmail.com',
      '542 389 76 56'
    );
    let temp2 = new Calisan(
      'Ufuk Şentürk',
      'muhabbet4242@gmail.com',
      '542 389 76 56'
    );
    this.employeeList.push(temp1);
    this.employeeList.push(temp2);

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      phone: new FormControl('', Validators.required),
    });
  }

  showInfo() {
    this.info = !this.info;
  }
  showBillInfo() {
    this.billInfo = !this.billInfo;
  }

  showUserInfo() {
    this.userInfo = !this.userInfo;
  }

  editEmployeeList() {
    this.edit = !this.edit;
  }

  AddEmployee() {
    this.addEmploye = true;
  }

  onSubmit(values) {
    console.log(values);
  }

  cancelEditEmpList() {
    this.addEmploye = false;
  }

  //Error messages
  validation_messages = {
    name: [{ type: 'required', message: 'isim alanı boş bırakılamaz' }],
    email: [
      { type: 'required', message: 'email alanı boş bırakılamaz' },
      { type: 'pattern', message: 'lütfen geçerli bir mail adresi giriniz' },
    ],
    phone: [
      {
        type: 'required',
        message: 'cep telefonu alanı boş bırakılamaz',
      },
    ],
  };
}
