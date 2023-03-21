 import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-add-modal',
  templateUrl: './skill-add-modal.component.html',
  styleUrls: ['./skill-add-modal.component.css']
})
export class SkillAddModalComponent {

  skillAddForm: any = FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login
    this.skillAddForm = this.formBuilder.group({
      skillIco: ['', [Validators.required]],
      percent: ['', [Validators.required]]
    })
  }

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

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.skillAddForm.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.skillAddForm.markAllAsTouched();
    }
  }

}
