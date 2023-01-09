import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardLeadsComponent} from './dashboard-leads.component';

describe('DashboardLeadsComponentComponent', () => {
  let component: DashboardLeadsComponent;
  let fixture: ComponentFixture<DashboardLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardLeadsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
