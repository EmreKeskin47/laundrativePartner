export class KurumProfil {
  cepTelefon: string;
  faturaAdresi: string;
  faturaBasligi: string;
  iban: string;
  isletmeAdi: any;
  isyeriAdresi: string;
  kurumTelefon: string;
  vergiNo: string;
  webSitesi: string;
  yoneticiAdi: string;
  yoneticiEPosta: string;

  constructor(
    cepTelefon: string,
    faturaAdresi: string,
    faturaBasligi: string,
    iban: string,
    isletmeAdi: any,
    isyeriAdresi: string,
    kurumTelefon: string,
    vergiNo: string,
    webSitesi: string,
    yoneticiAdi: string,
    yoneticiEPosta: string
  ) {
    this.cepTelefon = cepTelefon;
    this.faturaAdresi = faturaAdresi;
    this.faturaBasligi = faturaBasligi;
    this.iban = iban;
    this.isletmeAdi = isletmeAdi;
    this.isyeriAdresi = isyeriAdresi;
    this.kurumTelefon = kurumTelefon;
    this.vergiNo = vergiNo;
    this.webSitesi = webSitesi;
    this.yoneticiAdi = yoneticiAdi;
    this.yoneticiEPosta = yoneticiEPosta;
  }
}
