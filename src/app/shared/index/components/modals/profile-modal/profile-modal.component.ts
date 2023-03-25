import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent {

  user?: User;
  data: any;


  constructor(private sUser: UserService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.sUser.getUser(id).subscribe(data => {
      this.user = data
    })
  }
  profileForm = new FormGroup({
    profileImg: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
  })

  get ProfileImg() {
    return this.profileForm.get('profileImg');
  }
  clear(): void {
    this.profileForm.reset();
  }


  updateUserImg(): void {
    this.data = this.profileForm.value
    console.log(this.data)

    this.sUser.updateUser(this.user?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.profileForm.valid) {
      this.updateUserImg();
      window.location.reload();
      alert("Imagen de perfil modificada.");
    } else {
      this.profileForm.markAllAsTouched();
    }
  }
  index() {
    this.router.navigate(['index']);
  }
}
