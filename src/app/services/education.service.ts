import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url = "http://localhost:8080/education";
  constructor(private http: HttpClient) { }

  public list(): Observable<Education[]> {
    return this.http.get<Education[]>(this.url + `/show`);
  }
  public showEducation(id: number): Observable<Education> {
    return this.http.get<Education>(this.url + `/show/${id}`);
  }
  public newEducation(education:Education): Observable<Education> {
    return this.http.post<Education>(this.url + `/new`,education);
  }
  public updateEducation(education:Education): Observable<Education> {
    return this.http.put<Education>(this.url + `/update`,education);
  }
  public deleteEducation(id: number): Observable<Education> {
    return this.http.delete<Education>(this.url + `/delete/${id}`);
  }
}
