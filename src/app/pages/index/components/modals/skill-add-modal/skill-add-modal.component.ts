import { Component } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-add-modal',
  templateUrl: './skill-add-modal.component.html',
  styleUrls: ['./skill-add-modal.component.css']
})
export class SkillAddModalComponent {

  constructor(private sSkill: SkillService, private router: Router) { }

  data: any;

  skillAddForm = new FormGroup({
    skillIco: new FormControl('', [Validators.required]),
    percent: new FormControl('', [Validators.required])
  })
  ngOnInit() { }

  get SkillIco() {
    return this.skillAddForm.get('skillIco');
  }
  get Percent() {
    return this.skillAddForm.get('percent');
  }

  clear(): void {
    this.skillAddForm.reset();
  }

  createSkill(): void {
    this.data = this.skillAddForm.value;
    this.sSkill.createSkill(this.data).subscribe((data) => {
    })
    this.router.navigate(['/']);
  }
  onSubmit(event: Event) {
    event.preventDefault;
    if (this.skillAddForm.valid) {
      this.createSkill()
      window.location.reload();
    } else {
      alert("fallo la carga de datos, intente nuevamente");
      this.skillAddForm.markAllAsTouched();
      
    }
  }
  index(){
    this.router.navigate(['index']);
  }

}
