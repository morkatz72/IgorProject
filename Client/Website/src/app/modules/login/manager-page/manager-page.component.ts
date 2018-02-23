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

        for (var i = 0; i < this.users.length; i++) {
          if (this.users[i].userType == 2) {
            this.users[i].isManagerChecked = true;
          }
          else
          {
            this.users[i].isManagerChecked = false;
          }
        }
      }
    );
  }

  isDeleteUser(data: string) {
    this.userService.removeUser(data).subscribe(
      (data) => {
        debugger;
        this.getUsers();
      }
    );
  }

  isChangeAdmin(e: any, data: string) {
    debugger;
    let statusValue = (e.target.checked == true ? 2 : 1);
    this.userService.changeUserTypeStatus(data, statusValue).subscribe(
      (data) => {

      }
    )
  }
}
