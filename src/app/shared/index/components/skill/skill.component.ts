import { Component } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  data: Skill [] = [];

  constructor(private sSkill:SkillService) { }

  ngOnInit(): void {
    this.showSkill()
    
  }

  showSkill(){
    this.sSkill.list().subscribe(dato => { this.data = dato });
  }

}
