import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-add-modal',
  templateUrl: './education-add-modal.component.html',
  styleUrls: ['./education-add-modal.component.css']
})
export class EducationAddModalComponent {

  data: any;

  constructor(private sEducation: EducationService, private router: Router) {


  }
  educationAddForm = new FormGroup({
    titleEdu: new FormControl('',[Validators.required]),
    imgEdu: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    dateInitEdu: new FormControl('',[Validators.required]),
    dateEndEdu: new FormControl('',[Validators.required]),
    institutionEdu: new FormControl('',[Validators.required]),
    descriptionEdu: new FormControl('',[Validators.required])
  })
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
  createEducation(): void {
    this.data = this.educationAddForm.value;
    this.sEducation.createEducation(this.data).subscribe((data) => {
    })
    this.router.navigate(['/']);
  }
  onSubmit(event: Event) {
    event.preventDefault;

    if (this.educationAddForm.valid) {
      this.createEducation()
      window.location.reload();
    } else {
      alert("fallo la carga de datos, intente nuevamente");
      this.educationAddForm.markAllAsTouched();
      
    }
  }
  index() {
    this.router.navigate(['index']);
  }
}
