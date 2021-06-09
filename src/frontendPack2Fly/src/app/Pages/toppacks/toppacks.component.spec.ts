import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppacksComponent } from './toppacks.component';

describe('ToppacksComponent', () => {
  let component: ToppacksComponent;
  let fixture: ComponentFixture<ToppacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
