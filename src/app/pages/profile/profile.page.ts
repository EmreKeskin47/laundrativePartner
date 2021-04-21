import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  info: boolean = false;
  billInfo: boolean = false;
  userInfo: boolean = false;

  constructor() {}

  ngOnInit() {}

  showInfo() {
    this.info = !this.info;
  }
  showBillInfo() {
    this.billInfo = !this.billInfo;
  }

  showUserInfo() {
    this.userInfo = !this.userInfo;
  }
}
