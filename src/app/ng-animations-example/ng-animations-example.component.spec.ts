import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAnimationsExampleComponent } from './ng-animations-example.component';

describe('NgAnimationsExampleComponent', () => {
  let component: NgAnimationsExampleComponent;
  let fixture: ComponentFixture<NgAnimationsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAnimationsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAnimationsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
