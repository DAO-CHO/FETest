import { Component, Input, OnInit } from '@angular/core';
import { Taikhoan } from '../taikhoan';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaikhoanService } from '../taikhoan.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-taikhoan-details',
  templateUrl: './taikhoan-details.component.html',
  styleUrls: ['./taikhoan-details.component.css']
})
export class TaikhoanDetailsComponent implements OnInit {
  @Input() ava
  taikhoan: Taikhoan | undefined;
  taikhoans: Taikhoan[] = [];
  form!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private taikhoanService: TaikhoanService,
    private location: Location,
    public fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.getTaikhoan()
    this.form = this.fb.group({
      tentaikhoan: new FormControl(this.taikhoans[1], [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8)
      ]),
      ten: new FormControl(this.taikhoans[2], [
        Validators.required,
        Validators.maxLength(20)
      ]),
      ngaysinh: new FormControl(this.taikhoans[3], [
        Validators.required
      ]),
      gioitinh: new FormControl(this.taikhoans[4], [
        Validators.required
      ]),
      diachi: new FormControl(this.taikhoans[5], [
        Validators.required,
        Validators.maxLength(200)
      ]),
      email: new FormControl(this.taikhoans[6], [
        Validators.required
      ]),
    })
  }
  getTaikhoan(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taikhoanService.getTaikhoanid(id)
      .subscribe(taikhoan => this.taikhoan = taikhoan);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.taikhoan?.gioitinh) {
      if(this.taikhoan.gioitinh== 'Nam')
      {
        this.taikhoan.avatar='nam.jpg'
      }
      else{this.taikhoan.avatar='nu.jpg'}
      this.taikhoanService.updateTaikhoan(this.taikhoan)
        .subscribe(() => this.goBack());
    }
    
  }
  get tentaikhoan() {return this.form.get('tentaikhoan')}
  get ten() {return this.form.get('ten')}
  get ngaysinh() {return this.form.get('ngaysinh')}
  get gioitinh() {return this.form.get('gioitinh')}
  get diachi() {return this.form.get('diachi')}
  get email() {return this.form.get('email')}
}
