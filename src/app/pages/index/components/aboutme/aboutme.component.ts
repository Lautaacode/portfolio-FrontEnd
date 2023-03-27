import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  
  persons: Person[] | undefined;
  
  constructor(private sPerson: PersonService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.sPerson.getPersons().subscribe(dato => { this.persons = dato });
  }

  updateAboutme(id: number) {
    this.router.navigate(['person/update/aboutme', id]);
  }
}


