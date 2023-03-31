import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url = "https://portfolio-backend-k4jy.onrender.com/person/";
  constructor(private http: HttpClient) { }

  public createUser(person:Person): Observable<Person> {
    return this.http.post<Person>(`${this.url}add`,person);
  }
  public getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}show`);
  }
  public getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.url}show/${id}`);
  }
  
  public updatePerson(id?:number, person?:Person): Observable<Person> {
    return this.http.put<Person>(`${this.url}update/${id}`,person);
  }
  public deletePerson(id: number): Observable<Person> {
    return this.http.delete<Person>(`${this.url}delete/${id}`);
  }
}
