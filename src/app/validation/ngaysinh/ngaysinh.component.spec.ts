import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaysinhComponent } from './ngaysinh.component';

describe('NgaysinhComponent', () => {
  let component: NgaysinhComponent;
  let fixture: ComponentFixture<NgaysinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgaysinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgaysinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
