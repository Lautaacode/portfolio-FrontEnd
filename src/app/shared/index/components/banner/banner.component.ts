import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  data: User[] = [];

  constructor(private suser:UserService) { }

  
  showUser(): void {
    this.suser.list().subscribe(dato => { this.data = dato });
  }
  ngOnInit() {
    this.showUser()
  }
}
