import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  http = inject(HttpClient);

  constructor() { }
  createAccount(account: any) {
    return this.http.post("http://51.20.40.54:1200/docker" + "/register", account);
  }
}
