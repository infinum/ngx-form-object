import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user/user.service';
import { User } from 'app/models/user.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  public users: Array<User>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
