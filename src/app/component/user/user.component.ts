import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns = ['username', 'email', 'phone', 'created', 'role'];

  user?: User;
  users?: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe(data => this.users = data);
  }

}
