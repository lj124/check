import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PateintsignupComponent } from './pateintsignup.component';

describe('PateintsignupComponent', () => {
  let component: PateintsignupComponent;
  let fixture: ComponentFixture<PateintsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PateintsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PateintsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
