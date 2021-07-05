import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsearchComponent } from './doctorsearch.component';

describe('DoctorsearchComponent', () => {
  let component: DoctorsearchComponent;
  let fixture: ComponentFixture<DoctorsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
