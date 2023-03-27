import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['./education-modal.component.css']
})
export class EducationModalComponent {

  education?: Education;
  data: any;

  constructor(private sEducation: EducationService, private route: ActivatedRoute, private router: Router) {}

  educationForm = new FormGroup({
    titleEdu: new FormControl('', [Validators.required]),
    imgEdu: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    dateInitEdu: new FormControl('', [Validators.required]),
    dateEndEdu: new FormControl('', [Validators.required]),
    institutionEdu: new FormControl('', [Validators.required]),
    descriptionEdu: new FormControl('', [Validators.required])
  })
  
  ngOnInit() { 
    let id = this.route.snapshot.params['id'];
    this.sEducation.getEducation(id).subscribe(data => {
      this.education = data
    })
  }

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

  updateEducation(): void {
    this.data = this.educationForm.value   
    this.sEducation.updateEducation(this.education?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.educationForm.valid) {
      this.updateEducation();
      window.location.reload();
      alert("Experiencia modificada.");
    } else {
      this.educationForm.markAllAsTouched();
    }
  }
  index(){
    this.router.navigate(['index']);
  }
}
