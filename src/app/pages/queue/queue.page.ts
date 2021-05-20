import { IslemSirasiDetay } from './../../models/IslemSirasiDetay';
import { IslemSirasi } from './../../models/IslemSirasi';
import { SiparisService } from './../../services/siparis.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {
  islemSirasi: IslemSirasi[] = [];
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

  durum = {
    0: 'teslim alınacak',
    1: 'hazırlanıyor',
    2: 'hazır',
    3: 'teslim edildi',
    4: 'teslim edilemedi',
    5: 'gecikti',
  };

  constructor(private router: Router, private siparisService: SiparisService) {}

  ngOnInit() {
    this.siparisService.getIslemSirasi().subscribe((res) => {
      this.islemSirasi = res;
      if (res) {
        //this.sortIslemlerByDate();
      }
    });
  }

  getKategoriler(i: number): string[] {
    return Object.keys(this.islemSirasi[i].siparisler);
  }
  getIslemSirasiDetaylar(i, kategori): IslemSirasiDetay[] {
    return this.islemSirasi[i].siparisler[kategori];
  }

  sortIslemlerByDate() {
    if (this.islemSirasi != []) {
      console.log('girdim');
      console.log(this.islemSirasi[0].tarih);
      this.islemSirasi = this.islemSirasi.sort(
        (a, b) => b.tarih.getDate() - a.tarih.getDate()
      );
    }
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToOrderDetails(id: string | null) {
    this.router.navigate(['/order-details', { siparisId: id }]);
  }
}
