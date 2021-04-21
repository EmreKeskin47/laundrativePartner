import { Router } from '@angular/router';
import { Kurum } from './../../models/kurum';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  institutionInfo: Kurum;

  constructor(private router: Router) {}

  ngOnInit() {
    this.institutionInfo = new Kurum(
      'bil wash laundry',
      'Efe Çobanoğlu',
      1,
      5,
      10
    );
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  navigateToNewOrder() {}
  navigateToQueue() {}
  navigateToOrderList() {}
}
