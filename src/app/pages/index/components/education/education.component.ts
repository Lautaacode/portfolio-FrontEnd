import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/model/education';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educations: Education[] | undefined;

  constructor(private sEducation:EducationService, private router: Router) { }

  ngOnInit():void {
    this.getEducations();
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
