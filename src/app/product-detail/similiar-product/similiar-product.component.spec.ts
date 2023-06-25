import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimiliarProductComponent } from './similiar-product.component';

describe('SimiliarProductComponent', () => {
  let component: SimiliarProductComponent;
  let fixture: ComponentFixture<SimiliarProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimiliarProductComponent]
    });
    fixture = TestBed.createComponent(SimiliarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
