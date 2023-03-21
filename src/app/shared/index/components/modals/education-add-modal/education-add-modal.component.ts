import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-add-modal',
  templateUrl: './education-add-modal.component.html',
  styleUrls: ['./education-add-modal.component.css']
})
export class EducationAddModalComponent {

  educationAddForm: any = FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.educationAddForm = this.formBuilder.group({
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
    return this.educationAddForm.get('titleEdu');
  }
  get ImgEdu() {
    return this.educationAddForm.get('imgEdu');
  }
  get DateInitEdu() {
    return this.educationAddForm.get('dateInitEdu');
  }
  get DateEndEdu() {
    return this.educationAddForm.get('dateEndEdu');
  }
  get InstitutionEdu() {
    return this.educationAddForm.get('institutionEdu');
  }
  get DescriptionEdu() {
    return this.educationAddForm.get('descriptionEdu');
  }
  
  clear(): void {
    this.educationAddForm.reset();
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.educationAddForm.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.educationAddForm.markAllAsTouched();
    }
  }

}
