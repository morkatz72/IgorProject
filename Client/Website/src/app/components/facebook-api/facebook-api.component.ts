import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FacebookService, InitParams, UIResponse } from 'ngx-facebook';
import { FBVideoComponent } from 'ngx-facebook';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import * as $ from 'jquery';
import { FormControl } from '@angular/forms';
import { FbServiceService } from './fb-service.service';
import { Event, User } from './data-model';
//import { EventsComponent } from './events.component';
//import { FBService } from './fb.service';




@Component({
  selector: 'app-facebook-api',
  templateUrl: './facebook-api.component.html',
  styleUrls: ['./facebook-api.component.css']
})
export class FacebookApiComponent {
  
  @ViewChild(FBVideoComponent) video: FBVideoComponent;
  public FB: any;
  public window: any;


  public url;
  latestEvents: Event[] = [];
  allEvents: Event[] = [];
  mostActive: User[] = [];
  showEvents = false;
  showUsers = false

  constructor(private router: Router, private http: Http, private fb: FacebookService, private FbServiceService : FbServiceService) {
    
    fb.init({
      appId: '181182242224859',
      xfbml: true,
      version: 'v2.8'
    });
  };

  ngOnInit() {

  }
  
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
  }

  getLatestEvents(): void {
    debugger;
    this.showUsers = false;
    this.showEvents = true;

    let pageName = this.getPageName();

    this.FbServiceService.getLatestEvents(pageName).then(res => {
      res.data.forEach(obj => {
        this.latestEvents.push(new Event(
          obj.id,
          obj.name,
          obj.description,
          obj.start_time,
          obj.end_time,
          obj.place == undefined ? '' : obj.place.name));
      });

      this.latestEvents.forEach(event => {
        this.FbServiceService.getPicture(event.id).then(res => event.photo = res.data.url);
      })
    })
  }

  getUsers(): void {
    debugger;
    this.showEvents = false;
    this.showUsers = true;

    let pageName = this.getPageName();

    this.FbServiceService.getAllEvents(pageName).then(res => {
      this.updateAllEvents(res.data, this.allEvents, this.fb);

      if (res.paging.next != undefined) {
        //this.FbServiceService.getNextEvents(res.paging.next, this.allEvents, this.updateAllEvents);
      }

      this.getMostActiveUsers();
    });
  }

  private getMostActiveUsers(): void {
    debugger;
    let uniqueUsers = new Map();
    this.allEvents.forEach(e => {
      e.attendees.forEach(a => {
        if (!uniqueUsers.has(a.id)) {
          uniqueUsers.set(a.id, a);
        } else {
          a.eventsAttended++;
          uniqueUsers.set(a.id, a);
        }
      });

      this.mostActive = Array.from(uniqueUsers.values())
        .sort((a, b) => b.eventsAttended - a.eventsAttended)
        .slice(0, 20);

      this.mostActive.forEach(user => {
        this.FbServiceService.getPicture(user.id).then(res => user.profilePhoto = res.data.url);
      })
    })
  }

  private updateAllEvents(fbEvents, allEvents, fbService): void {

    fbEvents.forEach(obj => {
      fbService.getEventAttendees(obj.id).then(res => {
        var attendees: User[] = [];
        res.data.forEach(user => attendees.push(new User(user.id, user.name)));

        allEvents.push(new Event(
          obj.id,
          obj.name,
          obj.description,
          obj.start_time,
          obj.end_time,
          null,
          null,
          attendees
        ));
      })
    });
  }

  private getPageName(): string {
    //let regex = /https:\/\/www\.facebook\.com\/([\w.]+)\//
    let regex = /(https?:\/\/)?([\w\.]*)facebook\.com\/([a-zA-Z0-9_]*)$/;
    /*
    let match = regex.exec(this.url.value);*/

    let match = regex.exec('https://www.facebook.com/lior');
    return match[3];
  }
}
