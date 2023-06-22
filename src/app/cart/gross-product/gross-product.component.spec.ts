import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossProductComponent } from './gross-product.component';

describe('GrossProductComponent', () => {
  let component: GrossProductComponent;
  let fixture: ComponentFixture<GrossProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrossProductComponent]
    });
    fixture = TestBed.createComponent(GrossProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
