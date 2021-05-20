import { Kullanici } from './../../models/Kullanici';
import { KurumProfil } from './../../models/KurumProfil';
import { ProfilService } from './../../services/profil.service';
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

  edit: boolean = false;
  addEmploye: boolean = false;
  editEmployeeSelected: boolean = false;

  validations_form: FormGroup;
  update_form: FormGroup;

  kurumProfil: KurumProfil;
  kurumKullanicilar: Kullanici[] = [];
  selectedKullanici: Kullanici;

  constructor(
    private formBuilder: FormBuilder,
    private profilService: ProfilService
  ) {}

  ngOnInit() {
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

    this.update_form = this.formBuilder.group({
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

    this.profilService
      .getKullanicilar()
      .subscribe((res) => (this.kurumKullanicilar = res));

    this.profilService.getProfil().subscribe((res) => (this.kurumProfil = res));
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
  cancelEditEmpList() {
    this.addEmploye = false;
  }

  AddEmployee() {
    this.addEmploye = true;
  }

  editEmployee() {
    this.editEmployeeSelected = !this.editEmployeeSelected;
  }

  setSelectedKullanici(kullanici: Kullanici) {
    this.editEmployee();
    this.selectedKullanici = kullanici;
  }
  deleteEmployee(id: number) {
    this.profilService
      .deleteKullanici(id)
      .subscribe((res) => console.log(res, 'delete res'));
  }

  onSubmitCreate(values) {
    console.log(values);
    this.profilService
      .createKullanici(values.name, values.email, values.phone)
      .subscribe((res) => console.log(res, 'create res'));
  }

  onSubmitEdit(values) {
    this.profilService
      .updateKullanici(
        this.selectedKullanici.id,
        values.name,
        values.email,
        values.phone
      )
      .subscribe((res) => console.log(res, 'update res'));
    this.editEmployee();
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
