import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['./skill-modal.component.css']
})
export class SkillModalComponent {

  skill?: Skill;
  data: any;

  constructor(private sSkill: SkillService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { 
    let id = this.route.snapshot.params['id'];
    this.sSkill.getSkill(id).subscribe(data => {
      this.skill = data

    })
  }

  skillForm = new FormGroup({
    skillIco: new FormControl('', [Validators.required]),
    percent: new FormControl('', [Validators.required])
  })
  get SkillIco() {
    return this.skillForm.get('skillIco');
  }
  get Percent() {
    return this.skillForm.get('percent');
  }
  clear(): void {
    this.skillForm.reset();
  }

  updateSkill(): void {
    this.data = this.skillForm.value   
    this.sSkill.updateSkill(this.skill?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.skillForm.valid) {
      this.updateSkill();
      window.location.reload();
      alert("Skills modificada.");
    } else {
      this.skillForm.markAllAsTouched();
    }
  }
  index(){
    this.router.navigate(['index']);
  }

}
