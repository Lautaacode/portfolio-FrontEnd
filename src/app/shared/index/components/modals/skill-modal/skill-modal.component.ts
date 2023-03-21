import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['./skill-modal.component.css']
})
export class SkillModalComponent {

  skillForm: any = FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login
    this.skillForm = this.formBuilder.group({
      skillIco: ['', [Validators.required]],
      percent: ['', [Validators.required]]
    })
  }

  ngOnInit() { }

  get SkillIco() {
    return this.skillForm.get('skillIco');
  }
  get Percent() {
    return this.skillForm.get('percent');
  }
  clear(): void {
    this.skillForm.reset();
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.skillForm.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.skillForm.markAllAsTouched();
    }
  }

}
