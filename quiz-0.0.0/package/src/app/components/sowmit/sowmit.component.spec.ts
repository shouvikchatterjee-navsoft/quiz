import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SowmitComponent } from './sowmit.component';

describe('SowmitComponent', () => {
  let component: SowmitComponent;
  let fixture: ComponentFixture<SowmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SowmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SowmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
