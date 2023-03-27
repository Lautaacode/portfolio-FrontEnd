import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from 'src/app/model/media';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

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

  createSocialMedia() {
    this.router.navigate(['socialmedia/add']);
  }
  updateMedia(id:number) {
    this.router.navigate(['media/update',id]);
  }
  
  

  

  

  
  updateExperience(id: number) {
    this.router.navigate(['experience/update', id]);
  }
}
