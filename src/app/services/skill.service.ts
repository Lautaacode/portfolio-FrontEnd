import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url = "http://localhost:8080/skill";
  constructor(private http: HttpClient) { }

  public list(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url + `/show`);
  }
  public showSkill(id: number): Observable<Skill> {
    return this.http.get<Skill>(this.url + `/show/${id}`);
  }
  public newSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.url + `/new`, skill);
  }
  public updateSkill(skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(this.url + `/update`, skill);
  }
  public deleteSkill(id: number): Observable<Skill> {
    return this.http.delete<Skill>(this.url + `/delete/${id}`);
  }
}
