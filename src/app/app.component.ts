import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from './model/media';
import { MediaService } from './services/media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  medias: Media[] | undefined;

  constructor(private sMedia:MediaService ,private router:Router){}


  ngOnInit(): void {
    this.getMedias();
  }
  
  getMedias() {
    this.sMedia.getMedias().subscribe(dato => {
      this.medias = dato
    })
  }
}
