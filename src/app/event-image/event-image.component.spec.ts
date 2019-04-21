import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventImageComponent } from './event-image.component';

describe('EventImageComponent', () => {
  let component: EventImageComponent;
  let fixture: ComponentFixture<EventImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
