import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:8080/user";
  constructor(private http: HttpClient) { }

  public list(): Observable<User[]> {
    return this.http.get<User[]>(this.url + `/show`);
  }
  public showUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + `/show/${id}`);
  }
  public newUser(user:User): Observable<User> {
    return this.http.post<User>(this.url + `/new`,user);
  }
  public updateUser(user:User): Observable<User> {
    return this.http.put<User>(this.url + `/update`,user);
  }
  public deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.url + `/delete/${id}`);
  }
}
