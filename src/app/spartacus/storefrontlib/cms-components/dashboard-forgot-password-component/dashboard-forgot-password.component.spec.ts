import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardForgotPasswordComponent } from './dashboard-forgot-password.component';

describe('DashboardForgotPasswordComponent', () => {
  let component: DashboardForgotPasswordComponent;
  let fixture: ComponentFixture<DashboardForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
