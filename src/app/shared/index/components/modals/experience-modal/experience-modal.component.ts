import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['./experience-modal.component.css']
})
export class ExperienceModalComponent{

  experienceForm: any = FormGroup;
  experience:any = Experience;

  constructor(private formBuilder: FormBuilder, private sExperience: ExperienceService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.experienceForm = this.formBuilder.group({
      titleExp: ['', Validators.required],
      imgExp: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      dateInitExp: ['',[Validators.required]],
      dateEndExp: ['',[Validators.required]],
      institutionExp: ['', [Validators.required]],
      descriptionExp: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
  this.sExperience.showExperience(id).subscribe( data => {
    this.experience = data;
    console.log(data) 
  },() =>{
    alert("Error al cargar datos");
    this.router.navigate(['']);
  }
  )}

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

  updateExperience():void{
    this.sExperience.updateExperience(this.experienceForm.value).subscribe(data => {
      alert("Experiencia modificada.");
      console.log(this.experienceForm.value);
      this.router.navigate(['']);
    }
    )
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.experienceForm.valid) {
      this.updateExperience();
    } else {
      this.experienceForm.markAllAsTouched();
    }
  }
}
