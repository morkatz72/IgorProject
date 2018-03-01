import { Component, Renderer2, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersServiceService} from '../../modules/login/users-service.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public productId: string;
  @ViewChild('supermarketVideo') supermarketVideo: ElementRef; 

  constructor(private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document,
    private usersServiceService: UsersServiceService) { }

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
    ctx.fillText("ברוך הבא", x, y / 2);
        `;

    this._renderer2.appendChild(this._document.body, script);
  }

  ngAfterViewInit() {
    console.log(this.supermarketVideo.nativeElement);
    this.supermarketVideo.nativeElement.muted = true;
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  addProductView() {
    this.closeNav();
    this.router.navigate(['/add-or-update-product']);
  }
  loginView() {
    this.closeNav();
    this.router.navigate(['/login'])
  }
  registerView() {
    this.closeNav();
    this.router.navigate(['/register'])
  }

  weatherView() {
    this.closeNav();
    this.router.navigate(['/weather'])
  }

  productListView() {
    this.closeNav();
    this.router.navigate(['/product-list'])
  }

  basketView() {
    this.closeNav();
    this.router.navigate(['/basket'])
  }

  userName() {
    return localStorage.getItem('currentUser');
  }

  getDisplayUserName() {
    let displayValue = JSON.parse(localStorage.getItem('currentUser')).userName;
    return displayValue;
  }

  getUserStatus() {
    return localStorage.getItem('userType');
  }

  managerView() {
    this.closeNav();
    this.router.navigate(['/manager-page'])
  }

  logOff() {
    this.closeNav();
    this.usersServiceService.logout();
  }

  HistoryOneView() {
    this.closeNav();
    this.router.navigate(['/history-one-d3js/' + this.productId])
  }

  barChart() {
    this.closeNav();
    this.router.navigate(['/history-two-chart-bar'])
  }

  setMainPage() {
    this.closeNav();
    this.router.navigate(['/'])
  }

  facebookView() {
    this.closeNav();
    this.router.navigate(['/facebook-api'])
  }

  cheapestProduct() {
    this.closeNav();
    this.router.navigate(['/cheapest-product'])
  }

  preferredProduct() {
    this.closeNav();
    this.router.navigate(['/preferred-product'])
  }
}
