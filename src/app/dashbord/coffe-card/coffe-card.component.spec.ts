import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeCardComponent } from './coffe-card.component';

describe('CoffeCardComponent', () => {
  let component: CoffeCardComponent;
  let fixture: ComponentFixture<CoffeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeCardComponent]
    });
    fixture = TestBed.createComponent(CoffeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
