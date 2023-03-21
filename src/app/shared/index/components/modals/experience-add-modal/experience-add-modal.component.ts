import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-add-modal',
  templateUrl: './experience-add-modal.component.html',
  styleUrls: ['./experience-add-modal.component.css']
})
export class ExperienceAddModalComponent {

  experienceAddForm: any = FormGroup;
  titleExp:string = '';
  imgExp:string = '';
  dateInitExp:string = '';
  dateEndExp:string ='';
  institutionExp:string = '';
  descriptionExp:string = '';

  constructor(private formBuilder: FormBuilder, private sExperience: ExperienceService){

    this.experienceAddForm = this.formBuilder.group({
      titleExp: ['', Validators.required],
      imgExp: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      dateInitExp: ['',[Validators.required]],
      dateEndExp: ['',[Validators.required]],
      institutionExp: ['', [Validators.required]],
      descriptionExp: ['', [Validators.required]]
    })
  }

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
    const experience = new Experience(this.titleExp, this.imgExp,this.dateInitExp, this.dateEndExp, this.institutionExp, this.descriptionExp);
    this.sExperience.newExperience(experience).subscribe(() => {
    },
      () => {
        window.location.reload()
        alert("Experiencia Añadida");
        
        
       })

  }
  onSubmit(event: Event) {
    event.preventDefault;

    if (this.experienceAddForm.valid) {
      this.createExperience()
    } else {
      alert("fallo la carga de datos, intente nuevamente");
      this.experienceAddForm.markAllAsTouched();
      
    }
  }
}
