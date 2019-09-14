import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProductsComponent } from './dashboard-products.component';

describe('ClimateSensorsComponent', () => {
  let component: DashboardProductsComponent;
  let fixture: ComponentFixture<DashboardProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
