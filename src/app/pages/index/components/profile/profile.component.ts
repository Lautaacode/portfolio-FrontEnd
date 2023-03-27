import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  persons: Person[]| undefined;

  constructor(private sPerson: PersonService, private router:Router) { }

  ngOnInit() {
    this.getPersons()

  }
  getPersons() {
    this.sPerson.getPersons().subscribe(dato => { this.persons = dato });
  }  
}
