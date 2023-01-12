import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadImageZoomDialogComponent } from './lead-image-zoom-dialog.component';

describe('LeadImageZoomDialogComponent', () => {
  let component: LeadImageZoomDialogComponent;
  let fixture: ComponentFixture<LeadImageZoomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadImageZoomDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadImageZoomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
