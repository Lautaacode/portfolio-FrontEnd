import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url = "https://portfolio-backend-k4jy.onrender.com/skill/";
  constructor(private http: HttpClient) { }

  public createSkill(skill:Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.url}add`,skill);
  }
  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.url}show`);
  }
  public getSkill(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${this.url}show/${id}`);
  }
  
  public updateSkill(id?:number, skill?:Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.url}update/${id}`,skill);
  }
  public deleteSkill(id: number): Observable<Skill> {
    return this.http.delete<Skill>(`${this.url}delete/${id}`);
  }
}
