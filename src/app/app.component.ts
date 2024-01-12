import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Angular-app';

  serverElements = [
    {type: 'server', name: 'Test server', content: 'Just a test'},
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'CHanged!!';
  }

  destroyFirstComponent() {
    this.serverElements.splice(0,1);
  }
}
