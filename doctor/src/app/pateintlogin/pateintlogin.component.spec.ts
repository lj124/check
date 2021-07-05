import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PateintloginComponent } from './pateintlogin.component';

describe('PateintloginComponent', () => {
  let component: PateintloginComponent;
  let fixture: ComponentFixture<PateintloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PateintloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PateintloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
