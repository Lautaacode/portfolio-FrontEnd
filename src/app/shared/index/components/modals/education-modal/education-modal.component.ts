import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['./education-modal.component.css']
})
export class EducationModalComponent {

  educationForm: any = FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.educationForm = this.formBuilder.group({
      titleEdu: ['', Validators.required],
      imgEdu: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      dateInitEdu: ['',[Validators.required]],
      dateEndEdu: ['',[Validators.required]],
      institutionEdu: ['', [Validators.required]],
      descriptionEdu: ['', [Validators.required]]
    })
  }

  ngOnInit() { }

  get TitleEdu() {
    return this.educationForm.get('titleEdu');
  }
  get ImgEdu() {
    return this.educationForm.get('imgEdu');
  }
  get DateInitEdu() {
    return this.educationForm.get('dateInitEdu');
  }
  get DateEndEdu() {
    return this.educationForm.get('dateEndEdu');
  }
  get InstitutionEdu() {
    return this.educationForm.get('institutionEdu');
  }
  get DescriptionEdu() {
    return this.educationForm.get('descriptionEdu');
  }
  
  clear(): void {
    this.educationForm.reset();
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.educationForm.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.educationForm.markAllAsTouched();
    }
  }

}
