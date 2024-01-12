import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Angular-app';
  leadedFeature = 'recipe';

  onNavigate(feature: string){
    console.log('listen feature: ' + feature);
    this.leadedFeature = feature;
  }
}
