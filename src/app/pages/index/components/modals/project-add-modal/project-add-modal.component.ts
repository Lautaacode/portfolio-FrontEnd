import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-add-modal',
  templateUrl: './project-add-modal.component.html',
  styleUrls: ['./project-add-modal.component.css']
})
export class ProjectAddModalComponent {
  constructor(private sProject: ProjectService, private router: Router) { }

  data: any;

  projectAddForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    projectImg: new FormControl('', [Validators.required]),
    projectLink: new FormControl('', [Validators.required]),
  })
  ngOnInit() { }

  get Name() {
    return this.projectAddForm.get('name');
  }
  get ProjectImg() {
    return this.projectAddForm.get('projectImg');
  }
  get ProjectLink() {
    return this.projectAddForm.get('projectLink');
  }

  clear(): void {
    this.projectAddForm.reset();
  }

  createProject(): void {
    this.data = this.projectAddForm.value;
    this.sProject.createProject(this.data).subscribe((data) => {
    })
    this.router.navigate(['/']);
  } 
  onSubmit(event: Event) {
    event.preventDefault;
    if (this.projectAddForm.valid) {
      this.createProject()
      window.location.reload();
    } else {
      alert("fallo la carga de datos, intente nuevamente");
      this.projectAddForm.markAllAsTouched();
      
    }
  }
  index(){
    this.router.navigate(['index']);
  }

}
