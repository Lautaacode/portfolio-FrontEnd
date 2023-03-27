import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-aboutme-modal',
  templateUrl: './aboutme-modal.component.html',
  styleUrls: ['./aboutme-modal.component.css']
})
export class AboutmeModalComponent {
  person?: Person;
  data: any;

  constructor(private sPerson: PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.sPerson.getPerson(id).subscribe(data => {
      this.person = data
    })
  }

  aboutmeForm = new FormGroup({
    bannerImg: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    profileImg: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    aboutMe: new FormControl('', [Validators.required]),
    jobImg: new FormControl('',[Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    jobLink: new FormControl('',[Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    studyImg: new FormControl('',[Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    studyLink: new FormControl('',[Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
  })

  get BannerImg() {
    return this.aboutmeForm.get('bannerImg');
  }
  get ProfileImg() {
    return this.aboutmeForm.get('profileImg');
  }
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
  get JobLink() {
    return this.aboutmeForm.get('jobLink');
  }
  get StudyImg() {
    return this.aboutmeForm.get('studyImg');
  }
  get StudyLink() {
    return this.aboutmeForm.get('studyLink');
  }
  clear(): void {
    this.aboutmeForm.reset();
  }
  updateAboutme(): void {
    this.data = this.aboutmeForm.value

    this.sPerson.updatePerson(this.person?.id, this.data).subscribe(data => {

    })

    this.router.navigate(['/']);
  }
  onSubmit(event: Event) {
    event.preventDefault;

    if (this.aboutmeForm.valid) {
      this.updateAboutme();
      window.location.reload();
      alert("Acerca de mi modificada.");
    } else {
      this.aboutmeForm.markAllAsTouched();
    }
  }


}
