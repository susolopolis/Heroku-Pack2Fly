import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedpacksComponent } from './recommendedpacks.component';

describe('RecommendedpacksComponent', () => {
  let component: RecommendedpacksComponent;
  let fixture: ComponentFixture<RecommendedpacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedpacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
