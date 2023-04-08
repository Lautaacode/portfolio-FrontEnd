import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = "https://portfolio-backend-k4jy.onrender.com/project/";
  constructor(private http: HttpClient) { }

  public createProject(project:Project): Observable<Project> {
    return this.http.post<Project>(`${this.url}add`,project);
  }
  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}show`);
  }
  public getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.url}show/${id}`);
  }
  public updateProject(id?:number, project?:Project): Observable<Project> {
    return this.http.put<Project>(`${this.url}update/${id}`,project);
  }
  public deleteProject(id: number): Observable<Project> {
    return this.http.delete<Project>(`${this.url}delete/${id}`);
  }
}
