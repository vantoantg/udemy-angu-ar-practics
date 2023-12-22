import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers', // <app-servers></app-servers>
  // selector: '[app-servers]', // <div app-servers></div>
  // selector: '.app-servers', // <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  username: string = '';
  serverName = 'Server name test';
  serverCreated: boolean = false;
  servers = ['Test - server 1', 'Test - server 2'];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    if (!this.serverName) {
      this.serverCreated = false;
    }
  }
}
