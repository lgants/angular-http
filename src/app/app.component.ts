import { Component } from '@angular/core';

import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService){}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    // storeServers returns an observable; so need to subscribe
    // not necessary to unsubscribe from this observable since it only gets one response
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => {

        },
        (error) => {

        }
      )
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
