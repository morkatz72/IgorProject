import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user-login-component/User';
import { Headers, Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpService } from '../../services/httpService/http.service';
import { url } from '../../shared/Constants'
import { } from '@angular/material'

@Injectable()
export class UsersServiceService {

  constructor(private http: Http, private httpService: HttpService) { }

  login(userName:string, password:string) : Observable<Response> {
    return this.http.post(
      url + '/login',
      {
        "email": userName,
        "password": password
      },
      this.httpService.getOptions()
    ).map((data) => data.json());
  }

  register(data: any): Observable<Response> {
    return this.http.post(url + '/register',{ data }, this.httpService.getOptions()).map((data) => data.json());
  }

  getUserTypeByUserName(data: any): Observable<Response> {
    return this.httpService.http.get(url + '/getUserByUserName/' + data).map((data) => data.json());
  }

  getAllUsers(): Observable<Response> {
    return this.httpService.http.get(url + '/getUsers').map((data) => data.json());
  }

  removeUser(data: any): Observable<Response> {
    return this.http.post(url + '/removeUser', { data }, this.httpService.getOptions()).map((data) => data.json());
  }

  changeUserTypeStatus(userName: string, statusToChange : number): Observable<Response> {
    return this.http.post(url + '/changeUserTypeStatus', { userName, statusToChange }, this.httpService.getOptions()).map((data) => data.json());
  }
}
