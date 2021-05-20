export class SiparisDetay {
  siparisId: number;
  siparisTarihi: Date;
  musteriAdi: string;
  musteriKurumAdi: string;
  status: string;
  fiyat: number;
  indirimTipi: string;
  servisTutari: number;
  teslimEtmeAdres: string;
  teslimAlmaZamani: Date;
  kdv: number;
  indirimOrani: number;
  detay: [
    {
      adet: number;
      cins: number;
      durum: string;
      fiyat: number;
      id: number;
      kategori: number;
      kurumId: number;
      tarih: Date;
      tip: number;
      cinsAdi: string;
    }
  ];
  constructor(
    siparisId: number,
    siparisTarihi: Date,
    musteriAdi: string,
    musteriKurumAdi: string,
    status: string,
    fiyat: number,
    indirimTipi: string,
    servisTutari: number,
    teslimEtmeAdres: string,
    teslimAlmaZamani: Date,
    kdv: number,
    indirimOrani: number,
    detay: [
      {
        adet: number;
        cins: number;
        durum: string;
        fiyat: number;
        id: number;
        kategori: number;
        kurumId: number;
        tarih: Date;
        tip: number;
        cinsAdi: string;
      }
    ]
  ) {
    this.siparisId = siparisId;
    this.siparisTarihi = siparisTarihi;
    this.musteriAdi = musteriAdi;
    this.musteriKurumAdi = musteriKurumAdi;
    this.teslimAlmaZamani = teslimAlmaZamani;
    this.status = status;
    this.fiyat = fiyat;
    this.indirimTipi = indirimTipi;
    this.servisTutari = servisTutari;
    this.teslimEtmeAdres = teslimEtmeAdres;
    this.detay = detay;
    this.kdv = kdv;
    this.indirimOrani = indirimOrani;
  }
}
