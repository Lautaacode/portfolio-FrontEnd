import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persons: Person[] | undefined;

  constructor(private sPerson: PersonService, private router:Router) { }
  
  
  getUsers(): void {
    this.sPerson.getPersons().subscribe(dato => { this.persons = dato });
  }
  ngOnInit() {
    this.getUsers()
  }
}
