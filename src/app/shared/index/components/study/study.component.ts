import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/model/education';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent {

  data: Education[] = [];

  constructor(private sEducation:EducationService) { }

  ngOnInit():void {
    this.showEducation();
  }
  showEducation(){
    this.sEducation.list().subscribe(dato => { this.data = dato; });
  }
}
