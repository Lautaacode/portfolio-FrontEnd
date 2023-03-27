import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialmediaService } from 'src/app/services/socialmedia.service';

@Component({
  selector: 'app-socialmedia-add-modal',
  templateUrl: './socialmedia-add-modal.component.html',
  styleUrls: ['./socialmedia-add-modal.component.css']
})
export class SocialmediaAddModalComponent {
  constructor(private sSocial: SocialmediaService, private router: Router) { }

  data: any;

  socialAddForm = new FormGroup({
    socialIco: new FormControl('', [Validators.required]),
    socialLink: new FormControl('', [Validators.required,Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
  })
  ngOnInit() { }

  get SocialIco() {
    return this.socialAddForm.get('socialIco');
  }
  get SocialLink() {
    return this.socialAddForm.get('socialLink');
  }

  clear(): void {
    this.socialAddForm.reset();
  }

  createSocialMedia(): void {
    this.data = this.socialAddForm.value;
    this.sSocial.createSocialmedia(this.data).subscribe((data) => {
    })
    this.router.navigate(['/']);
  }
  onSubmit(event: Event) {
    event.preventDefault;
    if (this.socialAddForm.valid) {
      this.createSocialMedia()
      window.location.reload();
    } else {
      alert("fallo la carga de datos, intente nuevamente");
      this.socialAddForm.markAllAsTouched();

    }
  }
  index() {
    this.router.navigate(['index']);
  }

}
