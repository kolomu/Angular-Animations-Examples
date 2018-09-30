import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.css'],
  animations: [
    trigger('flipStateFront', [
      state('front', style({
        transform: 'perspective(600px) rotateY(-180deg)',
        background: '#FC0',
        width: '200px',
        height: '200px', 
        borderRadius: '7px',
        backfaceVisibility: 'hidden'
      })),
      state('back', style({
        transform: 'perspective(600px) rotateY(0deg)',
        background: 'aqua',
        width: '200px',
        height: '200px', 
        borderRadius: '7px',
        backfaceVisibility: 'hidden'
      })),
      transition('state2 => state1', animate('1000ms linear')),
    ])
  ]
})
export class FlipcardComponent implements OnInit {
  @Input() back: any;
  @Input() front: any;
  @Input() frontState: string;

  constructor() { 
    this.frontState = 'front';
  }

  ngOnInit() { }

  toggleState() {
    this.frontState === 'front' ? this.frontState = 'back' : this.frontState = 'front';
  }

}
