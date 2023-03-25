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
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    aboutMe: new FormControl('', [Validators.required]),
    jobImg: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    studyImg: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
  })
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
  get StudyImg() {
    return this.aboutmeForm.get('studyImg');
  }
  clear(): void {
    this.aboutmeForm.reset();
  }
  updateAboutme(): void {
    this.data = this.aboutmeForm.value
    console.log(this.data)

    this.sUser.updateUser(this.user?.id, this.data).subscribe(data => {
      console.log(data)
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
