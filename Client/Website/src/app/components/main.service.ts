import { Injectable } from '@angular/core';
import { HttpService } from '../services/httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Product } from '../shared/entities/Product';
import { Headers, Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { url } from '../shared/Constants';




@Injectable()
export class MainService {

  constructor() { }

  getCategories(): Observable<Response> {
    return this.httpService.http.get(url + '/getCategories').map((data) => data.json())
  }
}
