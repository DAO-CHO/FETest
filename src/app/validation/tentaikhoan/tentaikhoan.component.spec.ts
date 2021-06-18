import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentaikhoanComponent } from './tentaikhoan.component';

describe('TentaikhoanComponent', () => {
  let component: TentaikhoanComponent;
  let fixture: ComponentFixture<TentaikhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TentaikhoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TentaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
