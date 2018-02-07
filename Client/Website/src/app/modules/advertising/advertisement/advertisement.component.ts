import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  //module "jquery" {
   // export = $;
  //}
  public jQuery: JQueryStatic;
  public $: JQueryStatic;
  //public arr: any = [];
  //public currMsgIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  hideMsg(callback) {
    // set the msg name
    $("#msgContainer").slideUp(function () {
      $("#msgName").text("");
      $("#msgText").text("");
      $("#msgPictures").text("");
      $("#msgTemplate").text("");
      callback();
    });
  }
}
