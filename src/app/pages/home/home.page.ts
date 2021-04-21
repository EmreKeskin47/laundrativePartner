import { Kurum } from './../../models/kurum';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  institutionInfo: Kurum;

  navigateToProfile() {}

  ngOnInit() {
    this.institutionInfo = new Kurum(
      'bil wash laundry',
      'Efe Çobanoğlu',
      1,
      5,
      10
    );
  }

  navigateToNewOrder() {}
  navigateToQueue() {}
  navigateToOrderList() {}
}
