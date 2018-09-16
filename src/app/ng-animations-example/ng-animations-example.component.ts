import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-ng-animations-example',
  templateUrl: './ng-animations-example.component.html',
  styleUrls: ['./ng-animations-example.component.css'],
  animations: [
    trigger('boxColorChange', [
      state('state1', style({
        backgroundColor: '#F0F'
      })),
      state('state2', style({
        backgroundColor: 'red'
      })),
      transition('state1 => state2', animate('1000ms linear')),
      transition('state2 => state1', animate('1000ms linear'))
    ]),

    trigger('fadeInState', [
      state('visible', style({
        opacity: '1'
      })),
      state('invisible', style({
        opacity: '0'
      })),
      transition('* <=> *', animate('1000ms linear'))
    ]),

    trigger('slideOpenState', [
      state('open', style({
        height: '200px'
      })),
      state('close', style({
        height: '0px'
      })),
      transition('* <=> *', animate('500ms linear'))
    ]),

    trigger('slideInState', [
      state('in', style({
        left: '0px'
      })),
      state('out', style({
        left: '-400px'
      })),
      transition('in => out', animate('500ms ease-out')),
      transition('out => in', animate('500ms ease-in'))
    ]),

  ]
})
export class NgAnimationsExampleComponent {
  // Important: load browserAnimationsModule in AppModule.
  boxes: Box[];

  constructor() {
    this.boxes = [
      new Box('Lorem Ipsum dolor sit amet'),
      new Box('Lorem Ipsum dolor sit amet')
    ]
  }

  onChangeBG(box: Box) {
    box.toggleBoxColor();
  }

  onChangeFade(box: Box) {
    box.toggleFade();
  }

  onSlideOC(box: Box) {
    box.toggleSlideOC();
  }


  onSlideIO(box: Box) {
    box.toggleSlideIO();
  }

}

export class Box {

  constructor(public content: string, public boxColorState?: string,
    public fadeInState?: string, public slideOpenState?: string, public slideInState?: string) {
    this.boxColorState = boxColorState || 'state1';
    this.fadeInState = fadeInState || 'visible';
    this.slideOpenState = slideOpenState || 'open';
    this.slideInState = slideInState || 'out';
  }

  toggleBoxColor() {
    this.boxColorState === 'state1' ? this.boxColorState = 'state2' : this.boxColorState = 'state1';
  }

  toggleFade() {
    this.fadeInState === 'visible' ? this.fadeInState = 'invisible' : this.fadeInState = 'visible';
  }

  toggleSlideOC() {
    this.slideOpenState === 'open' ? this.slideOpenState = 'close' : this.slideOpenState = 'open';
  }

  toggleSlideIO() {
    this.slideInState === 'in' ? this.slideInState = 'out' : this.slideInState = 'in';
  }

}
