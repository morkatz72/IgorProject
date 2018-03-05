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
        this.getUsers();
      }
    );
  }

  isResetPassword(data: string) {
    this.userService.resetPassword(data).subscribe(
      (data) => {
        this.getUsers();
      }
    );
  }

  isChangeAdmin(e: any, data: string) {
    let statusValue = (e.target.checked == true ? 2 : 1);
    this.userService.changeUserTypeStatus(data, statusValue).subscribe(
      (data) => {

      }
    )
  }

  userName() {
    return this.userService.userName();
  }

  userType() {
    return this.userService.getUserStatus();
  }

  checkManager() {
    return this.userName() != null && this.userType() == "2";
  }
}
