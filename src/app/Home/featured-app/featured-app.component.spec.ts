import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAppComponent } from './featured-app.component';

describe('FeaturedAppComponent', () => {
  let component: FeaturedAppComponent;
  let fixture: ComponentFixture<FeaturedAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
