import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Socialmedia } from 'src/app/model/socialmedia';
import { SocialmediaService } from 'src/app/services/socialmedia.service';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent {

  socials: Socialmedia [] | undefined;
  constructor(private sSocial:SocialmediaService, private router: Router) { }

  ngOnInit():void {
    this.getSocialMedia();
  }
  getSocialMedia() {
    this.sSocial.getSocialmedias().subscribe(dato => {
      this.socials = dato
    })
  }
  updateSocialMedia(id: number) {
    this.router.navigate(['socialmedia/update', id]);
  }
  deleteSocialMedia(id: number){
    this.sSocial.deleteSocialmedia(id).subscribe(data => {
      this.socials = this.socials?.filter(social => social.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      },0);
  
  }

}
