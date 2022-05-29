import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAndOrderComponent } from './track-and-order.component';

describe('TrackAndOrderComponent', () => {
  let component: TrackAndOrderComponent;
  let fixture: ComponentFixture<TrackAndOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackAndOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackAndOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
