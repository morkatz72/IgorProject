import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-about-data',
  templateUrl: './about-data.component.html',
  styleUrls: ['./about-data.component.css']
})
export class AboutDataComponent implements OnInit {

  messageText: string;
  messages: Array<any>;
  socket: SocketIOClient.Socket;

  constructor() {
    debugger;
    this.socket = io.connect('http://localhost:8080', { transports: ['websocket', 'polling', 'flashsocket'] });
  }

  ngOnInit() {
    this.messages = new Array();

    this.socket.on('message-received', (msg: any) => {
      this.messages.push(msg);
      console.log(msg);
      console.log(this.messages);
    });

    this.socket.on('event2', (data: any) => {
      console.log(data.msg);
      this.socket.emit('event3', {
        msg: 'Yes, its working for me!!'
      });
    });
    this.socket.on('event4', (data: any) => {
      console.log(data.msg);
    });
  }

}
