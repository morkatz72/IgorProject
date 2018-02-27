import { Injectable } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

const graphUrl = 'https://graph.facebook.com/';
const authToken = 'access_token=181182242224859|6b420d60a65a990be00082571c32b382';

@Injectable()
export class FbServiceService {

  constructor(private fb: FacebookService) {
    fb.init({
      appId: '181182242224859',
      xfbml: true,
      version: 'v2.8'
    });
  }

}
