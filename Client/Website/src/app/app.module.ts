import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './services/httpService/http.service';
import { LoginModule } from './modules/login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module'
import { HttpModule } from '@angular/http';
import { ProductModule } from './modules/product/product.module';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpModule,
    ProductModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  exports: [MainPageComponent]
})
export class AppModule { }
