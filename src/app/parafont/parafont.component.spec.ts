import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParafontComponent } from './parafont.component';

describe('ParafontComponent', () => {
  let component: ParafontComponent;
  let fixture: ComponentFixture<ParafontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParafontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParafontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
