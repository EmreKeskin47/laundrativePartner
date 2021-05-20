import { IslemSirasiDetay } from './IslemSirasiDetay';
export class IslemSirasi {
  musteriAdi: string;
  teslimAlmaAdres: string;
  teslimEtmeAdres: string;
  siparisNo: string;
  status: string;
  tarih: Date;
  siparisler: Map<number, IslemSirasiDetay[]> = new Map();
}
