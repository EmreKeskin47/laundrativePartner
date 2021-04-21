export class Kurum {
  kurum_adi: string;
  yonetici_adi: string;
  yeniSiparis: number;
  islemSirasi: number;
  siparisListesi: number;

  constructor(
    kurum_adi: string,
    yonetici_adi: string,
    yeniSiparis: number,
    islemSirasi: number,
    siparisListesi: number
  ) {
    this.kurum_adi = kurum_adi;
    this.yonetici_adi = yonetici_adi;
    this.yeniSiparis = yeniSiparis;
    this.islemSirasi = islemSirasi;
    this.siparisListesi = siparisListesi;
  }
}
