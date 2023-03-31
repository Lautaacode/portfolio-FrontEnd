import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socialmedia } from '../model/socialmedia';

@Injectable({
  providedIn: 'root'
})
export class SocialmediaService {

  url = "https://portfolio-backend-k4jy.onrender.com/socialmedia/";
  constructor(private http: HttpClient) { }

  public createSocialmedia(socialmedia:Socialmedia): Observable<Socialmedia> {
    return this.http.post<Socialmedia>(`${this.url}add`,socialmedia);
  }
  public getSocialmedias(): Observable<Socialmedia[]> {
    return this.http.get<Socialmedia[]>(`${this.url}show`);
  }
  public getSocialmedia(id: number): Observable<Socialmedia> {
    return this.http.get<Socialmedia>(`${this.url}show/${id}`);
  }
  
  public updateSocialmedia(id?:number, socialmedia?:Socialmedia): Observable<Socialmedia> {
    return this.http.put<Socialmedia>(`${this.url}update/${id}`,socialmedia);
  }
  public deleteSocialmedia(id: number): Observable<Socialmedia> {
    return this.http.delete<Socialmedia>(`${this.url}delete/${id}`);
  }
}
