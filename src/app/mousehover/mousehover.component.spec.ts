import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousehoverComponent } from './mousehover.component';

describe('MousehoverComponent', () => {
  let component: MousehoverComponent;
  let fixture: ComponentFixture<MousehoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MousehoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MousehoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
