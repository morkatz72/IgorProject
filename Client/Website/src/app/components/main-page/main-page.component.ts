import { Component, Renderer2, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersServiceService} from '../../modules/login/users-service.service';
import { BasketItemModule } from '../../modules/basket/basket-item.module';
import { BasketModule } from '../../modules/basket/basket.module';
import { BasketService } from '../../services/basketService/basket-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('supermarketVideo') supermarketVideo: ElementRef; 

  constructor(private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document) { }

  ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.type = "text/javascript";
    script.text = `
    var canvas = document.getElementById("welcomeCanvas");
    var x = canvas.width;
    var y = canvas.height;

    var ctx = canvas.getContext('2d');
    ctx.textAlign = "right"
    ctx.font = "50px Segoe UI";
    ctx.shadowColor = "rgb(190, 190, 190)";
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10
    ctx.shadowBlur = 10;

    var gradient = ctx.createLinearGradient(x, y, x-150, y-100);
    gradient.addColorStop(0, "rgb(97, 250, 97)");
    gradient.addColorStop(1, "rgb(110, 129, 255)");
    ctx.fillStyle = gradient;
    ctx.fillText("מערכת הסל שלי", x, y - 14);
        `;

    this._renderer2.appendChild(this._document.body, script);
  }

  ngAfterViewInit() {
    this.supermarketVideo.nativeElement.muted = true;
  }
}
