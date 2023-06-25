import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecriptionProductComponent } from './decription-product.component';

describe('DecriptionProductComponent', () => {
  let component: DecriptionProductComponent;
  let fixture: ComponentFixture<DecriptionProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecriptionProductComponent]
    });
    fixture = TestBed.createComponent(DecriptionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
