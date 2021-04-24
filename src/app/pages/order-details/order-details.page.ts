import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
