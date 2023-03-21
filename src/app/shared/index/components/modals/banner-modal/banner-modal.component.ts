import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner-modal',
  templateUrl: './banner-modal.component.html',
  styleUrls: ['./banner-modal.component.css']
})
export class BannerModalComponent {
  bannerForm: any = FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login
    this.bannerForm = this.formBuilder.group({
      bannerImg: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    })
  }

  ngOnInit() { }

  get BannerImg() {
    return this.bannerForm.get('bannerImg');
  }
  clear(): void {
    this.bannerForm.reset();
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.bannerForm.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.bannerForm.markAllAsTouched();
    }
  }

}
