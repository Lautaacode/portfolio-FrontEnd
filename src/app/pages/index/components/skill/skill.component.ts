import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  isLogged = false;

  skills: Skill[] | undefined ;

  constructor(private sSkill: SkillService, private router: Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.getSkills()
    if (this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }
  getSkills() {
    this.sSkill.getSkills().subscribe(dato => {
      this.skills = dato
    })
  }
  updateSkill(id: number) {
    this.router.navigate(['skill/update', id]);
  }
  deleteSkill(id: number) {
    this.sSkill.deleteSkill(id).subscribe(data => {
      this.skills = this.skills?.filter(experience => experience.id !== id);
    })

    setTimeout(() => {
      window.location.reload();
    }, 0);

  }
}
