import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['./experience-modal.component.css']
})
export class ExperienceModalComponent {

  experience?: Experience;
  data: any;

  constructor(private sExperience: ExperienceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.sExperience.getExperience(id).subscribe(data => {
      this.experience = data

    })
  }
  experienceForm = new FormGroup({
    titleExp: new FormControl('', [Validators.required]),
    imgExp: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    dateInitExp: new FormControl('', [Validators.required]),
    dateEndExp: new FormControl('', [Validators.required]),
    institutionExp: new FormControl('', [Validators.required]),
    descriptionExp: new FormControl('', [Validators.required])
  })

  get TitleExp() {
    return this.experienceForm.get('titleExp');
  }
  get ImgExp() {
    return this.experienceForm.get('imgExp');
  }
  get DateInitExp() {
    return this.experienceForm.get('dateInitExp');
  }
  get DateEndExp() {
    return this.experienceForm.get('dateEndExp');
  }
  get InstitutionExp() {
    return this.experienceForm.get('institutionExp');
  }
  get DescriptionExp() {
    return this.experienceForm.get('descriptionExp');
  }

  clear(): void {
    this.experienceForm.reset();
  }

  updateExperience(): void {
    this.data = this.experienceForm.value   
    this.sExperience.updateExperience(this.experience?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.experienceForm.valid) {
      this.updateExperience();
      window.location.reload();
      alert("Experiencia modificada.");
    } else {
      this.experienceForm.markAllAsTouched();
    }
  }
  index(){
    this.router.navigate(['index']);
  }
}
