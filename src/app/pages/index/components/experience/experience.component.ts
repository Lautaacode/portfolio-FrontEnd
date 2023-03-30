import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  isLogged = false;

  experiences: Experience[] | undefined;

  constructor(private sExperience: ExperienceService, private router: Router, private tokenService: TokenService) {

  }

  ngOnInit(): void {
    this.getExperiences();
    if (this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

  getExperiences() {
    this.sExperience.getExperiences().subscribe(dato => {
      this.experiences = dato
    })
  }
  updateExperience(id: number) {
    this.router.navigate(['experience/update', id]);
  }
  deleteExperience(id: number){
    this.sExperience.deleteExperience(id).subscribe(data => {
      this.experiences = this.experiences?.filter(experience => experience.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      },0);
  
  }
}
