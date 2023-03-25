import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  data: User [] = [];

  users: User[] | undefined;
  
  constructor(private sUser: UserService, private router:Router) { }

  showUser(): void {
    this.sUser.getUsers().subscribe(dato => { this.data = dato });
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.sUser.getUsers().subscribe(dato => { this.users = dato });
  }


  updateAboutme(id: number) {
    this.router.navigate(['user/update/aboutme', id]);
  }
}


