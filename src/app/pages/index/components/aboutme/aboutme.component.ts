import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  isLogged = false;
  persons: Person[] | undefined;
  
  constructor(private sPerson: PersonService, private router:Router,private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getUsers();
    if (this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

  getUsers(): void {
    this.sPerson.getPersons().subscribe(dato => { this.persons = dato });
  }

  updateAboutme(id: number) {
    this.router.navigate(['person/update/aboutme', id]);
  }
}


