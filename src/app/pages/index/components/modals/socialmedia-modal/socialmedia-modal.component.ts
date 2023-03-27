import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Socialmedia } from 'src/app/model/socialmedia';
import { SocialmediaService } from 'src/app/services/socialmedia.service';

@Component({
  selector: 'app-socialmedia-modal',
  templateUrl: './socialmedia-modal.component.html',
  styleUrls: ['./socialmedia-modal.component.css']
})
export class SocialmediaModalComponent {

  social?: Socialmedia;
  data: any;

  constructor(private sSocial: SocialmediaService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.sSocial.getSocialmedia(id).subscribe(data => {
      this.social = data

    })
  }
  socialForm = new FormGroup({
    socialIco: new FormControl('', [Validators.required]),
    socialLink: new FormControl('', [Validators.required,Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
  })
  
  get SocialIco() {
    return this.socialForm.get('socialIco');
  }
  get SocialLink() {
    return this.socialForm.get('socialLink');
  }

  clear(): void {
    this.socialForm.reset();
  }

  updateSocialMedia(): void {
    this.data = this.socialForm.value   
    this.sSocial.updateSocialmedia(this.social?.id, this.data).subscribe(data => {
    })
    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.socialForm.valid) {
      this.updateSocialMedia();
      window.location.reload();
      alert("Experiencia modificada.");
    } else {
      this.socialForm.markAllAsTouched();
    }
  }
  index(){
    this.router.navigate(['index']);
  }
}
