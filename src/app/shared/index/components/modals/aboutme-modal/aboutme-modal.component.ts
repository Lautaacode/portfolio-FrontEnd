import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aboutme-modal',
  templateUrl: './aboutme-modal.component.html',
  styleUrls: ['./aboutme-modal.component.css']
})
export class AboutmeModalComponent {
  aboutmeForm: any = FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.aboutmeForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['',[Validators.required]],
      title: ['',[Validators.required]],
      aboutMe: ['', [Validators.required]],
      jobImg: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      studyImg: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    })
  }

  ngOnInit() { }

  get Name() {
    return this.aboutmeForm.get('name');
  }
  get Lastname() {
    return this.aboutmeForm.get('lastname');
  }
  get Title() {
    return this.aboutmeForm.get('title');
  }
  get AboutMe() {
    return this.aboutmeForm.get('aboutMe');
  }
  get JobImg() {
    return this.aboutmeForm.get('jobImg');
  }
  get StudyImg() {
    return this.aboutmeForm.get('studyImg');
  }
  clear(): void {
    this.aboutmeForm.reset();
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.aboutmeForm.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.aboutmeForm.markAllAsTouched();
    }
  }

}
