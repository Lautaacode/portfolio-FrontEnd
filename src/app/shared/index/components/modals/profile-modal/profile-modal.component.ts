import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent {

  profileForm: any = FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login
    this.profileForm = this.formBuilder.group({
      profileImg: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
    })
  }

  ngOnInit() { }

  get ProfileImg() {
    return this.profileForm.get('profileImg');
  }
  clear(): void {
    this.profileForm.reset();
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.profileForm.valid) {
      alert("Todo salio bien ¡Enviar formuario!")
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

}
