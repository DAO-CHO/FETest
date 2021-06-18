import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaikhoanDetailsComponent } from './taikhoan-details.component';

describe('TaikhoanDetailsComponent', () => {
  let component: TaikhoanDetailsComponent;
  let fixture: ComponentFixture<TaikhoanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaikhoanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaikhoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
