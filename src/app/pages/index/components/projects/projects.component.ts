import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  isLogged = false;
  projects: Project[]| undefined;

  constructor(private sProject: ProjectService, private router:Router,private tokenService:TokenService ) { }

  ngOnInit() {
    this.getProjects()
    if (this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }
  getProjects() {
    this.sProject.getProjects().subscribe(dato => { this.projects = dato });
  }
  updateProject(id: number) {
    this.router.navigate(['project/update', id]);
  }
  deleteProject(id: number){
    this.sProject.deleteProject(id).subscribe(data => {
      this.projects = this.projects?.filter(project => project.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      },0);
  
  }
}
