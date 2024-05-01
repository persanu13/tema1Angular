import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordPageComponent } from './dashbord-page.component';

describe('DashbordPageComponent', () => {
  let component: DashbordPageComponent;
  let fixture: ComponentFixture<DashbordPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordPageComponent]
    });
    fixture = TestBed.createComponent(DashbordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
