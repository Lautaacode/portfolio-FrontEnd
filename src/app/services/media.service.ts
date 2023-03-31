import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from '../model/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  url = "https://portfolio-backend-k4jy.onrender.com/media/";
  constructor(private http: HttpClient) { }

  public createMedia(media:Media): Observable<Media> {
    return this.http.post<Media>(`${this.url}add`,media);
  }
  public getMedias(): Observable<Media[]> {
    return this.http.get<Media[]>(`${this.url}show`);
  }
  public getMedia(id: number): Observable<Media> {
    return this.http.get<Media>(`${this.url}show/${id}`);
  }
  
  public updateMedia(id?:number, media?:Media): Observable<Media> {
    return this.http.put<Media>(`${this.url}update/${id}`,media);
  }
  public deleteMedia(id: number): Observable<Media> {
    return this.http.delete<Media>(`${this.url}delete/${id}`);
  }
}
