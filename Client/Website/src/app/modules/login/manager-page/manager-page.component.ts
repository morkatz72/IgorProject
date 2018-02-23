import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { User } from '../../../shared/entities/User';


@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent implements OnInit {

  constructor(private userService: UsersServiceService) { }

  public users: User[];


  ngOnInit() {
    this.getUsers();
  }

  userName() {
    return localStorage.getItem('currentUser');
  }

  getUsers(): any {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = User.toUser(data);
        console.log(this.users);
      }
    );
  }

  isDeleteUser(data: string) {
    this.userService.removeUser(data).subscribe(
      (data) => {
        this.users = User.toUser(data);
        console.log(this.users);
      }
    );
  }

  isChangeAdmin(data: string) {
    debugger;
  }
}
