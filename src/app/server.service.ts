import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    // Headers constructor accepts a JS object where the key/value pairs are the key/values in the header
    // Headers are passed to the http action within options object (3rd argument) with the key 'headers'
    const headers = new Headers({'Content-Type': 'application/json'})

    // This creates an observable; it's not sending a request
    // return this.http.post('https://udemy-ng-http-a9c75.firebaseio.com/data.json', servers, {headers: headers});
    return this.http.put('https://udemy-ng-http-a9c75.firebaseio.com/data.json', servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-a9c75.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          // need to explicitly return observable here since catch won't do so by default
          return Observable.throw(error);
        }
      )
  }

  getAppName() {
    // this will create an observable
    return this.http.get('https://udemy-ng-http-a9c75.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }
}
