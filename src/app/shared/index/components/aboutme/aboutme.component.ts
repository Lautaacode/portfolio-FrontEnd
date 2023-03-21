import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  data: User [] = [];

  constructor(private suser: UserService) { }
  

  showUser(): void {
    this.suser.list().subscribe(dato => { this.data = dato });
  }
  ngOnInit(): void {
    this.showUser();
  }
}


