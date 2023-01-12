import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadImageZoomComponent } from './lead-image-zoom.component';

describe('LeadImageZoomComponent', () => {
  let component: LeadImageZoomComponent;
  let fixture: ComponentFixture<LeadImageZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadImageZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadImageZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
