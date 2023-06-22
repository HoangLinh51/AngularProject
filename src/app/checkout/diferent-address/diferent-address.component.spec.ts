import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferentAddressComponent } from './diferent-address.component';

describe('DiferentAddressComponent', () => {
  let component: DiferentAddressComponent;
  let fixture: ComponentFixture<DiferentAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiferentAddressComponent]
    });
    fixture = TestBed.createComponent(DiferentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
