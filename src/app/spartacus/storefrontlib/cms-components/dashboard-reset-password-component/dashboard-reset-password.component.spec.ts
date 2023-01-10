import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResetPasswordComponent } from './dashboard-reset-password.component';

describe('DashboardResetPasswordComponent', () => {
  let component: DashboardResetPasswordComponent;
  let fixture: ComponentFixture<DashboardResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardResetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
