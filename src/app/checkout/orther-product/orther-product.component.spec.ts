import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrtherProductComponent } from './orther-product.component';

describe('OtherProductComponent', () => {
  let component: OrtherProductComponent;
  let fixture: ComponentFixture<OrtherProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrtherProductComponent],
    });
    fixture = TestBed.createComponent(OrtherProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
