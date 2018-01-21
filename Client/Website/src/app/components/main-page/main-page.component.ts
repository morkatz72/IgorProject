import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

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
}
