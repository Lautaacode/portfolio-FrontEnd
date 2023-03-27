import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url = "http://localhost:8080/education/";
  constructor(private http: HttpClient) { }

  public createEducation(education:Education): Observable<Education> {
    return this.http.post<Education>(`${this.url}add`,education);
  }
  public getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.url}show`);
  }
  public getEducation(id: number): Observable<Education> {
    return this.http.get<Education>(`${this.url}show/${id}`);
  }
  
  public updateEducation(id?:number, education?:Education): Observable<Education> {
    return this.http.put<Education>(`${this.url}update/${id}`,education);
  }
  public deleteEducation(id: number): Observable<Education> {
    return this.http.delete<Education>(`${this.url}delete/${id}`);
  }
}
