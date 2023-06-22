import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootertopComponent } from './footertop.component';

describe('FootertopComponent', () => {
  let component: FootertopComponent;
  let fixture: ComponentFixture<FootertopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootertopComponent]
    });
    fixture = TestBed.createComponent(FootertopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
