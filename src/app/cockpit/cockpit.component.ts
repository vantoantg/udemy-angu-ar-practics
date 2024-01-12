import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('newServerContent') newServerContent: ElementRef;
  constructor() {
  }

  ngOnInit() {
  }


  onAddServer(serverNameInput: HTMLInputElement)
  {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement)
  {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }
}
