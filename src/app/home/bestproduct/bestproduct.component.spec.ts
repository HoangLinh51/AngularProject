import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestproductComponent } from './bestproduct.component';

describe('BestproductComponent', () => {
  let component: BestproductComponent;
  let fixture: ComponentFixture<BestproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestproductComponent]
    });
    fixture = TestBed.createComponent(BestproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
