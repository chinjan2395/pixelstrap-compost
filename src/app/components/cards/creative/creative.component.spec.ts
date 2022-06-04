import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreativeComponent } from './creative.component';

describe('CreativeComponent', () => {
  let component: CreativeComponent;
  let fixture: ComponentFixture<CreativeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
