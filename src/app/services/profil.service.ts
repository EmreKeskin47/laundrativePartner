import { BASE_URL } from './../api/apiUrl';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  public isletme_adi = '';
  public yonetici_adi = '';
  url = `${BASE_URL}/kullanici`;

  setIsletmeBilgileri(isletme: string, yonetici: string) {
    this.isletme_adi = isletme;
    this.yonetici_adi = yonetici;
  }

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProfil(): Observable<any> {
    return this.http.get<any>(
      `${this.url}/profil?token=${this.authService.getCredentials().token}`
    );
  }

  getKullanicilar(): Observable<any> {
    return this.http.get<any>(
      `${this.url}/kullanicilar?token=${
        this.authService.getCredentials().token
      }`
    );
  }

  deleteKullanici(id: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        adresId: id,
        token: this.authService.getCredentials().token,
      },
    };
    try {
      return this.http.delete<any>(`${this.url}/sil`, options);
    } catch (err) {
      console.log('DELETE kullanici err', err);
    }
  }

  updateKullanici(id: number, adi: string, email: string, telefonCep: string) {
    let withToken = Object.assign(
      { kullanici: { id: id, adi: adi, email: email, telefonCep: telefonCep } },
      {
        token: this.authService.getCredentials().token,
      }
    );
    let body = JSON.stringify(withToken);
    try {
      return this.http.post<any[]>(`${this.url}/guncelle`, body);
    } catch (err) {
      console.log('PUT kullanıcı err ', err);
    }
  }

  createKullanici(
    adi: string,
    email: string,
    telefonCep: string
  ): Observable<any> {
    let withToken = Object.assign(
      { kullanici: { adi: adi, email: email, telefonCep: telefonCep } },
      {
        token: this.authService.getCredentials().token,
      }
    );
    let body = JSON.stringify(withToken);
    try {
      return this.http.put<any[]>(`${this.url}/olustur`, body);
    } catch (err) {
      console.log('POST kullanıcı err ', err);
    }
  }
}
