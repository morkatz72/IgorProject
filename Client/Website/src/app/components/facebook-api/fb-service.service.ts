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


  getLatestEvents(name: string) {
    return this.fb.api(graphUrl + name + '/events/?limit=20&' + authToken);
  }

  getPicture(id: string) {
    return this.fb.api(graphUrl + id + '/picture/?' + authToken);
  }

  getAllEvents(name: string) {
    return this.fb.api(graphUrl + name + '/events/?' + authToken);
  }

  getNextEvents(url: string, allEvents: Event[], callback) {
    return this.fb.api(url).then(result => {
      callback(result.data, allEvents, this);
      if (result.paging.next != undefined) {
        this.getNextEvents(result.paging.next, allEvents, callback);
      }
    });
  }

  getEventAttendees(id: string) {
    return this.fb.api(graphUrl + id + '/attending/?limit=9999&' + authToken);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
