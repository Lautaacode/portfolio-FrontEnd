import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-banner-modal',
  templateUrl: './banner-modal.component.html',
  styleUrls: ['./banner-modal.component.css']
})
export class BannerModalComponent {
  
  user?: User;
  data: any;

  constructor(private sUser: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.sUser.getUser(id).subscribe(data => {
      this.user = data
    })
  }
  bannerForm = new FormGroup({
    bannerImg: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
  });
  get BannerImg() {
    return this.bannerForm.get('bannerImg');
  }
  clear(): void {
    this.bannerForm.reset();
  }

  updateBannerImg(): void {
    this.data = this.bannerForm.value
    console.log(this.data)

    this.sUser.updateUser(this.user?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.bannerForm.valid) {
      this.updateBannerImg();
      window.location.reload();
      alert("Imagen de banner modificada.");
    } else {
      this.bannerForm.markAllAsTouched();
    }
  }

  index() {
    this.router.navigate(['index']);
  }

}
