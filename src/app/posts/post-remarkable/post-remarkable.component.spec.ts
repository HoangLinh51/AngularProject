import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRemarkableComponent } from './post-remarkable.component';

describe('PostRemarkableComponent', () => {
  let component: PostRemarkableComponent;
  let fixture: ComponentFixture<PostRemarkableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostRemarkableComponent]
    });
    fixture = TestBed.createComponent(PostRemarkableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
