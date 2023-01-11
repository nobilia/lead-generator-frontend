import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMyLeadsComponent } from './dashboard-my-leads.component';

describe('DashboardMyLeadsComponent', () => {
  let component: DashboardMyLeadsComponent;
  let fixture: ComponentFixture<DashboardMyLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMyLeadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMyLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
