import { BASE_URL } from '../api/apiUrl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url2: string = `${BASE_URL}/kullanici`;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.get(`${this.url2}/giris?email=${email}&sifre=${password}`);
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('token');
  }

  setCredentials(mail: string, password: string, token: string) {
    localStorage.setItem('email', mail);
    localStorage.setItem('password', password);
    localStorage.setItem('token', token);
  }

  getCredentials(): { mail: string; pass: string; token: string } {
    let mail = localStorage.getItem('email');
    let pass = localStorage.getItem('password');
    let token = localStorage.getItem('token');
    return { mail, pass, token };
  }
}
