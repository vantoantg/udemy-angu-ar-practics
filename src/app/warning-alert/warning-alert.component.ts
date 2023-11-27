import {Component} from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
      <div class="badge badge-warning">This is a warning, you are in danger!</div>
    `,
  styles: [
    `div {
      padding: 0.5rem
    }
    `
  ]
})

export class WarningAlertComponent {

}
