import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from 'src/app/model/media';
import { MediaService } from 'src/app/services/media.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  
  isLogged = false;

  medias: Media[] | undefined;

  constructor(private sMedia:MediaService ,private router:Router,private tokenService: TokenService){}


  ngOnInit(): void {
    this.getMedias();
    if(this.tokenService.getToken()){
      this.isLogged=true;
      
    }else{
      this.isLogged=false;
    }

  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
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
  login(){
    this.router.navigate(['login']);
    
  }
}
