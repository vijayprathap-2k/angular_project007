import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytimeComponent } from './displaytime.component';

describe('DisplaytimeComponent', () => {
  let component: DisplaytimeComponent;
  let fixture: ComponentFixture<DisplaytimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaytimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
