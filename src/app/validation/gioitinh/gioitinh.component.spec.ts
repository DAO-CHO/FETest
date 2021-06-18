import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioitinhComponent } from './gioitinh.component';

describe('GioitinhComponent', () => {
  let component: GioitinhComponent;
  let fixture: ComponentFixture<GioitinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GioitinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GioitinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
