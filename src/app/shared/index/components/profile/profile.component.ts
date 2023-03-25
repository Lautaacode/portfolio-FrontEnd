import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  users: User[]| undefined;

  constructor(private sUser: UserService, private router:Router) { }

  ngOnInit() {
    this.showUser()

  }
  showUser() {
    this.sUser.getUsers().subscribe(dato => { this.users = dato });
  }

  updateProfileImg(id: number){
    this.router.navigate(['user/update/profileImg', id]);
  }
  
}
