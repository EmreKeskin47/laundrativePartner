import { ProfilService } from './../../services/profil.service';
import { SiparisService } from './../../services/siparis.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  kurumAdi = '';
  yoneticiAdi = '';
  yeniSiparis = 0;
  islemSirasi = 0;
  siparisListesi = 0;

  constructor(
    private router: Router,
    private siparisService: SiparisService,
    private profilService: ProfilService
  ) {}

  ngOnInit() {
    this.kurumAdi = this.profilService.isletme_adi;
    this.yoneticiAdi = this.profilService.yonetici_adi;
    this.siparisService.siparisOzet().subscribe((res) => {
      if (res) {
        this.yeniSiparis = res.yeniSiparis;
        this.islemSirasi = res.islemdekiSiparisSayisi;
        this.siparisListesi = res.tumSiparisSayisi;
      }
    });
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  navigateToNewOrder() {
    this.router.navigate(['/queue']);
  }
  navigateToQueue() {
    this.router.navigate(['/queue']);
  }
  navigateToOrderList() {
    this.router.navigate(['/order-list']);
  }

  ionViewDidEnter() {}
}
