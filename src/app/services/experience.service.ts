import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  url = "http://localhost:8080/experience";
  constructor(private http: HttpClient) { }

  public list(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url + `/show`);
  }
  public showExperience(id: number): Observable<Experience> {
    return this.http.get<Experience>(this.url + `/show/${id}`);
  }
  public newExperience(exprience:Experience): Observable<Experience> {
    return this.http.post<Experience>(this.url + `/new`,exprience);
  }
  public updateExperience(exprience:Experience): Observable<Experience> {
    return this.http.put<Experience>(this.url + `/update`,exprience);
  }
  public deleteExperience(id: number): Observable<Experience> {
    return this.http.delete<Experience>(this.url + `/delete/${id}`);
  }
}
