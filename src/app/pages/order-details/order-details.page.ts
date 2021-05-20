import { SiparisDetay } from './../../models/SiparisDetay';
import { SiparisService } from './../../services/siparis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  siparisId = '';
  siparis: SiparisDetay;

  tipAdlari = { 3: 'prm', 2: 'exp', 1: 'std', 0: 'std' };
  kategoriAdi = {
    1: 'çamaşır yıkama',
    2: 'ütüleme',
    3: 'kuru temizleme',
    4: 'extra',
    5: 'halı yıkama',
    6: 'terzi',
    7: 'lostra',
  };

  indirimAdi = {
    1: 'kurum',
    2: 'musteri',
    3: 'özel',
    4: 'indirim yok',
    5: 'kampanya',
  };
  //özel indirim tl bazında

  constructor(
    private router: Router,
    private siparisService: SiparisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.siparisId = this.route.snapshot.paramMap.get('siparisId');
    this.siparisService.getDetay(this.siparisId).subscribe((res) => {
      this.siparis = res;
    });
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
