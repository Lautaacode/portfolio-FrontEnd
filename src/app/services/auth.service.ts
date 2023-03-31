import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DJwt } from '../model/djwt';
import { LoginUser } from '../model/login-user';
import { NewUser} from '../model/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl= 'https://portfolio-backend-k4jy.onrender.com/auth/'

  constructor(private httpClient: HttpClient) { }

  public nuevo(newUser: NewUser): Observable<any>{
    return this.httpClient.post<any>(`${this.authUrl}new`, newUser);
  }

  public login(loginUser:LoginUser): Observable<DJwt>{
    return this.httpClient.post<DJwt>(`${this.authUrl}login`, loginUser);
  }
}
