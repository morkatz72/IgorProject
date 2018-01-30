import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisingService} from './advertising.service';
import { AdvertisementComponent } from './advertisement/advertisement.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AdvertisingService],
  declarations: [AdvertisementComponent]
})
export class AdvertisingModule { }
