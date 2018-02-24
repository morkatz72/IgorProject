import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public productId: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  addProductView() {
    this.router.navigate(['/add-or-update-product']);
  }
  loginView() {
    this.router.navigate(['/login'])
  }
  registerView() {
    this.router.navigate(['/register'])
  }

  productListView() {
    this.router.navigate(['/product-list'])
  }

  basketView() {
    this.router.navigate(['/basket'])
  }

  userName() {
    return localStorage.getItem('currentUser');
  }

  getUserStatus() {
    return localStorage.getItem('userType');
  }

  managerView() {
    this.router.navigate(['/manager-page'])
  }

  logOff() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/'])
  }

  HistoryOneView() {
    this.router.navigate(['/history-one-d3js/' + this.productId])
  }

  barChart() {
    this.router.navigate(['/history-two-chart-bar'])
  }

  setMainPage() {
    this.router.navigate(['/'])
  }

  cheapestProduct() {
    this.router.navigate(['/cheapest-product'])
  }

  preferredProduct() {
    this.router.navigate(['/preferred-product'])
  }
}
