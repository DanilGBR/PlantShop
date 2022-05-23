import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAppComponent } from './articles-app.component';

describe('ArticlesAppComponent', () => {
  let component: ArticlesAppComponent;
  let fixture: ComponentFixture<ArticlesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
