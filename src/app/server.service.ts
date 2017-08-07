import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    // Headers constructor accepts a JS object where the key/value pairs are the key/values in the header
    // Headers are passed to the http action within options object (3rd argument) with the key 'headers'
    const headers = new Headers({'Content-Type': 'application/json'})
    
    // This creates an observable; it's not sending a request
    return this.http.post('https://udemy-ng-http-a9c75.firebaseio.com/data.json', servers, {headers: headers});
  }
}
