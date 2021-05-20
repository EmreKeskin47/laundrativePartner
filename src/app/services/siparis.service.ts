import { SiparisDetay } from './../models/SiparisDetay';
import { IslemSirasi } from './../models/IslemSirasi';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BASE_URL } from './../api/apiUrl';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SiparisListe } from '../models/SiparisListe';

@Injectable({
  providedIn: 'root',
})
export class SiparisService {
  url = `${BASE_URL}/siparis`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  siparisOzet(): Observable<any> {
    return this.http.get<any>(
      `${this.url}/ozet?token=${this.authService.getCredentials().token}`
    );
  }

  getIslemSirasi(): Observable<any> {
    return this.http.get<any>(
      `${this.url}/islemSirasi?token=${this.authService.getCredentials().token}`
    );
  }

  getDetay(siparisId): Observable<SiparisDetay> {
    return this.http.get<SiparisDetay>(
      `${this.url}/detay?token=${
        this.authService.getCredentials().token
      }&siparisId=${siparisId}`
    );
  }

  getListe(): Observable<SiparisListe[]> {
    let siparisId = 0;
    return this.http.get<SiparisListe[]>(
      `${this.url}/liste?token=${
        this.authService.getCredentials().token
      }&siparisId=${siparisId}`
    );
  }
}
