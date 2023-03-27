import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  users: User[] | undefined;

  constructor(private sUser:UserService, private router:Router) { }
  
  
  getUsers(): void {
    this.sUser.getUsers().subscribe(dato => { this.users = dato });
  }
  ngOnInit() {
    this.getUsers()
  }
}
