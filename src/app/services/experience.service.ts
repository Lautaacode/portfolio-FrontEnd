import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  url = "http://localhost:8080/experience/";
  constructor(private http: HttpClient) { }

  public createExperience(exprience:Experience): Observable<Experience> {
    return this.http.post<Experience>(`${this.url}add`,exprience);
  }
  public getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.url}show`);
  }
  public getExperience(id: number): Observable<Experience> {
    return this.http.get<Experience>(`${this.url}show/${id}`);
  }
  
  public updateExperience(id?:number, exprience?:Experience): Observable<Experience> {
    return this.http.put<Experience>(`${this.url}update/${id}`,exprience);
  }
  public deleteExperience(id: number): Observable<Experience> {
    return this.http.delete<Experience>(`${this.url}delete/${id}`);
  }
}
