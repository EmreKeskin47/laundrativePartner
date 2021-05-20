export class Kullanici {
  email: string;
  id: number;
  rolAdi: string;
  rolId: number;
  telefonCep: string;
  username: string;

  constructor(
    email: string,
    id: number,
    rolAdi: string,
    rolId: number,
    telefonCep: string,
    username: string
  ) {
    this.email = email;
    this.id = id;
    this.rolAdi = rolAdi;
    this.rolId = rolId;
    this.telefonCep = telefonCep;
    this.username = username;
  }
}
