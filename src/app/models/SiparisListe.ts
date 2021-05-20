export class SiparisListe {
  siparisId: number;
  siparisTarihi: string;
  musteriAdi: string;
  status: string;
  fiyat: number;
  constructor(
    siparisId: number,
    siparisTarihi: string,
    musteriAdi: string,
    status: string,
    fiyat: number
  ) {
    this.siparisId = siparisId;
    this.siparisTarihi = siparisTarihi;
    this.musteriAdi = musteriAdi;
    this.status = status;
    this.fiyat = fiyat;
  }
}
