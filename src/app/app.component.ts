import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="onChangeBG(box1, '#F0F')">Magenta</button>
  <button (click)="onFadeOut(box1)">FadeOut</button>
  <button (click)="onFadeIn(box1)">FadeIn</button>
  <button (click)="onSlideOpen(box2)">Slide Open</button>
  <button (click)="onSlideClose(box2)">Slide Close</button>
  <button (click)="onSlideIn(box3)">Slide In</button>
  <button (click)="onSlideOut(box3)">Slide Out</button>
  <div id="box1" #box1>Content in Box 1...</div>
  <div id="box2" #box2>Fly In/Out Box...</div>
  <div id="box3" #box3>Fly In/Out Box...</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onChangeBG(el: HTMLDivElement, color: string) {
    // background color, duration, timingFunction (e.g. ease-in/ease-out/linear), delay
    el.style.transition = "background 1.0s linear 0s";
    el.style.background = color;
  }

  onFadeIn(el: HTMLDivElement) {
    el.style.transition = "opacity 1.0s linear 0s";
    el.style.opacity = '1';
  }

  onFadeOut(el: HTMLDivElement) {
    el.style.transition = "opacity 1.0s linear 0s";
    el.style.opacity = '0';
  }

  onSlideOpen(el: HTMLDivElement) {
    el.style.transition = "height 0.5s linear 0s";
    el.style.height = "200px";
  }

  onSlideClose(el: HTMLDivElement) {
    el.style.transition = "height 0.5s linear 0s";
    el.style.height = "0px";
  }

  onSlideIn(el: HTMLDivElement) {
    el.style.transition = "left 0.5s ease-in 0s";
    el.style.left = "0px";
  }

  onSlideOut(el: HTMLDivElement) {
    el.style.transition = "left 0.5s ease-out 0s";
    el.style.left = "-400px";
  }
}
