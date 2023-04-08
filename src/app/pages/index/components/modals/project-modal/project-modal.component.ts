import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  constructor(private sProject: ProjectService, private router: Router,private route:ActivatedRoute) { }

  project?: Project;
  data: any;

  ngOnInit() { 
    let id = this.route.snapshot.params['id'];
    this.sProject.getProject(id).subscribe(data => {
      this.project = data

    })
  }
  projectForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    projectImg: new FormControl('', [Validators.required]),
    projectLink: new FormControl('', [Validators.required]),
  })

  get Name() {
    return this.projectForm.get('name');
  }
  get ProjectImg() {
    return this.projectForm.get('projectImg');
  }
  get ProjectLink() {
    return this.projectForm.get('projectLink');
  }

  clear(): void {
    this.projectForm.reset();
  }

  updateProject(): void {
    this.data = this.projectForm.value   
    this.sProject.updateProject(this.project?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.projectForm.valid) {
      this.updateProject();
      window.location.reload();
      alert("Proyecto modificado.");
    } else {
      this.projectForm.markAllAsTouched();
    }
  }
  index(){
    this.router.navigate(['index']);
  }

}
