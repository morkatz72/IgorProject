import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  Snap: any;
  @ViewChild('myCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  ngOnInit() {
    localStorage.setItem("basket", "[]");
    //this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    /*
    var canvas = this.Snap("#svg");
    canvas.circle(5, 5, 5, 5).attr({ fill: "black" });
    console.log('clicked');
    console.log(this.title);
    console.log(this.title);
    canvas.circle(5, 5, 5, 5).attr({ fill: "red" });*/
  }
}
