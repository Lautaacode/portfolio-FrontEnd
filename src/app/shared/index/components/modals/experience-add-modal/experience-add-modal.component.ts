import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-add-modal',
  templateUrl: './experience-add-modal.component.html',
  styleUrls: ['./experience-add-modal.component.css']
})
export class ExperienceAddModalComponent {

  constructor(private sExperience: ExperienceService, private router: Router){}

  data: any

  experienceAddForm = new FormGroup({
        titleExp: new FormControl('', [Validators.required]),
        imgExp: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),      dateInitExp: new FormControl('', [Validators.required]),
        dateEndExp: new FormControl('', [Validators.required]),
        institutionExp: new FormControl('', [Validators.required]),
        descriptionExp: new FormControl('', [Validators.required]),
      })
  ngOnInit() {
    }

  get TitleExp() {
    return this.experienceAddForm.get('titleExp');
  }
  get ImgExp() {
    return this.experienceAddForm.get('imgExp');
  }
  get DateInitExp() {
    return this.experienceAddForm.get('dateInitExp');
  }
  get DateEndExp() {
    return this.experienceAddForm.get('dateEndExp');
  }
  get InstitutionExp() {
    return this.experienceAddForm.get('institutionExp');
  }
  get DescriptionExp() {
    return this.experienceAddForm.get('descriptionExp');
  }
  
  clear(): void {
    this.experienceAddForm.reset();
  }

  createExperience(): void {
    this.data = this.experienceAddForm.value;
    console.log(this.data)

    this.sExperience.createExperience(this.data).subscribe(data => {
    })
    this.router.navigate(['/']);
  }
  onSubmit(event: Event) {
    event.preventDefault;

    if (this.experienceAddForm.valid) {
      this.createExperience()
      window.location.reload();
    } else {
      alert("fallo la carga de datos, intente nuevamente");
      this.experienceAddForm.markAllAsTouched();
      
    }
  }
  index(){
    this.router.navigate(['index']);
  }
}
