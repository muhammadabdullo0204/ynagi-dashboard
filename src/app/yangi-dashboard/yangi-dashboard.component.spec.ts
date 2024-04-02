import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YangiDashboardComponent } from './yangi-dashboard.component';

describe('YangiDashboardComponent', () => {
  let component: YangiDashboardComponent;
  let fixture: ComponentFixture<YangiDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YangiDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YangiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
