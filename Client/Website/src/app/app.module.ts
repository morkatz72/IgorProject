import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpService } from './services/httpService/http.service';
import { LoginModule } from './modules/login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module'
import { HttpModule } from '@angular/http';
import { ProductModule } from './modules/product/product.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdvertisingModule } from './modules/advertising/advertising.module';
import { MainService } from './components/main.service';
import { BasketModule } from './modules/basket/basket.module'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpModule,
    ProductModule,
    AdvertisingModule,
    BasketModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  providers: [HttpService, MainService],
  bootstrap: [AppComponent],
  exports: [MainPageComponent]
})
export class AppModule { }
