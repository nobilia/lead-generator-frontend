import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMenuUiComponent } from './dashboard-menu-ui.component';

describe('DashboardMenuUiComponent', () => {
  let component: DashboardMenuUiComponent;
  let fixture: ComponentFixture<DashboardMenuUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMenuUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMenuUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
