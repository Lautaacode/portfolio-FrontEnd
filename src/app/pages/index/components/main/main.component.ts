import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private router: Router) { }

  createExperience() {
    this.router.navigate(['experience/add']);
  }
  createEducation() {
    this.router.navigate(['education/add']);
  }
  createSkill() {
    this.router.navigate(['skill/add']);
  }
}

