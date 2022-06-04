import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MegaOptionsComponent } from './mega-options.component';

describe('MegaOptionsComponent', () => {
  let component: MegaOptionsComponent;
  let fixture: ComponentFixture<MegaOptionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
