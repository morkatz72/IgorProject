import { Component, OnInit, AfterViewInit } from '@angular/core';
//import { FacebookService, InitParams, UIResponse } from 'ngx-facebook';
//import { FBVideoComponent } from 'ngx-facebook';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import * as $ from 'jquery';




@Component({
  selector: 'app-facebook-api',
  templateUrl: './facebook-api.component.html',
  styleUrls: ['./facebook-api.component.css']
})
export class FacebookApiComponent {
  /*
  @ViewChild(FBVideoComponent) video: FBVideoComponent;
  public FB: any;
  public window: any;
  */

  constructor(/*private router: Router, private http: Http, private fb: FacebookService*/) {
    /*
    this.fb.init({
      appId: '1234566778',
      xfbml: true,
      version: 'v2.9'
    });*/
  };

  ngOnInit() {
    
  }
  /*
  ngAfterViewInit() {

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    if (this.video) {
      this.video.play();
      this.video.pause();
      this.video.getVolume();
    }
  }*/
}
