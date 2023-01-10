import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMockPaymentComponent } from './dashboard-mock-payment.component';

describe('DashboardMockPaymentComponent', () => {
  let component: DashboardMockPaymentComponent;
  let fixture: ComponentFixture<DashboardMockPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMockPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMockPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
