import { SiparisListe } from './../../models/SiparisListe';
import { SiparisService } from './../../services/siparis.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  orderList: SiparisListe[] = [];

  constructor(private router: Router, private siparisService: SiparisService) {}

  ngOnInit() {
    this.siparisService.getListe().subscribe((res: any[]) => {
      this.orderList = res;
    });
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToOrderDetails(id: number) {
    this.router.navigate(['/order-details', { siparisId: id }]);
  }
}
