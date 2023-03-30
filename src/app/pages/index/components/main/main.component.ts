import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  isLogged = false;

  constructor(private router: Router,private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

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

