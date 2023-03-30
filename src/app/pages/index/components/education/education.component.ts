import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/model/education';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  isLogged = false;

  educations: Education[] | undefined;

  constructor(private sEducation:EducationService, private router: Router,private tokenService: TokenService) { }

  ngOnInit():void {
    this.getEducations();
    if (this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }
  getEducations() {
    this.sEducation.getEducations().subscribe(dato => {
      this.educations = dato
    })
  }
  updateEducation(id: number) {
    this.router.navigate(['education/update', id]);
  }
  deleteEducation(id: number){
    this.sEducation.deleteEducation(id).subscribe(data => {
      this.educations = this.educations?.filter(education => education.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      },0);
  
  }
  
}
