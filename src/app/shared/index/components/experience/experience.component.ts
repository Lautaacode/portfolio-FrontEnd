import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { ExperienceModalComponent } from '../modals/experience-modal/experience-modal.component';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{


  data: Experience[] = [];

  constructor(private sExperience: ExperienceService) {

  }

  ngOnInit(): void {
    this.showExperiences();
  }

  showExperiences() {
    this.sExperience.list().subscribe(dato => this.data = dato)
  }

  deleteExperience(id: number) {
    if (id != undefined) {
      this.sExperience.deleteExperience(id).subscribe(
        () => {
          this.showExperiences();
        }, () => {
          alert("su experiencia fue eliminada correctamente")
          this.showExperiences();
        })
    }
  }
}
