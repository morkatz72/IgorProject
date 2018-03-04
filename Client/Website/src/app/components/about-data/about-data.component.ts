import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-about-data',
  templateUrl: './about-data.component.html',
  styleUrls: ['./about-data.component.css']
})
export class AboutDataComponent implements OnInit {

  socket: SocketIOClient.Socket;
  messageSocket: string;

  constructor() {
    debugger;
    this.socket = io.connect('http://localhost:8080', { transports: ['websocket', 'polling', 'flashsocket'] });
  }

  ngOnInit() {
    this.socket.on('WelcomeEvent', (data: any) => {
      this.messageSocket = data.msg;
    });
  }
}
