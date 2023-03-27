import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Media } from 'src/app/model/media';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-media-modal',
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.css']
})
export class MediaModalComponent {

  media?: Media;
  data: any;

  constructor(private sMedia: MediaService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.sMedia.getMedia(id).subscribe(data => {
      this.media = data

    })
  }
  mediaForm = new FormGroup({
    logo: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    background: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
  })

  get Logo() {
    return this.mediaForm.get('logo');
  }
  get Background() {
    return this.mediaForm.get('background');
  }

  clear(): void {
    this.mediaForm.reset();
  }

  updateMedia(): void {
    this.data = this.mediaForm.value
    this.sMedia.updateMedia(this.media?.id, this.data).subscribe(data => {
    })
    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.mediaForm.valid) {
      this.updateMedia();
      window.location.reload();
      alert("Experiencia modificada.");
    } else {
      this.mediaForm.markAllAsTouched();
    }
  }
  index() {
    this.router.navigate(['index']);
  }
}
