import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  data: User[] = [];

  constructor(private suser: UserService) { }

  ngOnInit() {
    this.showUser()

  }
  showUser() {
    this.suser.list().subscribe(dato => { this.data = dato });
  }
}

