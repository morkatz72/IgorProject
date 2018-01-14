import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Headers, Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(public http: Http) { }

  getOptions(): any {
    let header: HttpHeaders = new HttpHeaders().append("Content-Type", "application/json;charset=utf-8");
    let headers: Headers =
      new Headers(
        [{
          "Origin": "http://localhost:420dsada0",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*"
        }]
      );
    let reqOptions: RequestOptions = new RequestOptions();
    reqOptions.headers = headers;
    return reqOptions;
  }
}
