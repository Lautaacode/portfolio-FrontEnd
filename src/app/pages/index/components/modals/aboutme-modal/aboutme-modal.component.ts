import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-aboutme-modal',
  templateUrl: './aboutme-modal.component.html',
  styleUrls: ['./aboutme-modal.component.css']
})
export class AboutmeModalComponent {
  user?: User;
  data: any;

  constructor(private sUser: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.sUser.getUser(id).subscribe(data => {
      this.user = data
    })
  }

  aboutmeForm = new FormGroup({
    bannerImg: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    profileImg: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    aboutMe: new FormControl('', [Validators.required]),
    jobImg: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    jobLink: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    studyImg: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    studyLink: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
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

    this.sUser.updateUser(this.user?.id, this.data).subscribe(data => {

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
