import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild, DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges, ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!!!!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!!!!');
    // console.log('Header text: ' + this.header.nativeElement.textContent);
    // console.log('Content of paragraph text: ' + this.paragraph.nativeElement.textContent);
    // console.log(this.header);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!!!!');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called!!!!');
    console.log('Content of paragraph text: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called!!!!');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called!!!!');
    console.log('Header text: ' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called!!!!');
  }

  ngOnDestroy() {
    console.log('OnDestroy called!!!!');
  }
}
