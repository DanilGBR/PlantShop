import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAppComponent } from './categories-app.component';

describe('CategoriesAppComponent', () => {
  let component: CategoriesAppComponent;
  let fixture: ComponentFixture<CategoriesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
