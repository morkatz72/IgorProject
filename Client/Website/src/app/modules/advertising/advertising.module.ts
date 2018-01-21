import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisingService} from './advertising.service'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AdvertisingService],
  declarations: []
})
export class AdvertisingModule { }
