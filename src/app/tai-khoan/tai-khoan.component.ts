import { Component, Input, OnInit } from '@angular/core';
import { Taikhoan } from '../taikhoan';
import { TAIKHOANS } from '../mock-taikhoan';
import { TaikhoanService } from '../taikhoan.service';
import { MessageService } from '../message.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
@Component({
  selector: 'app-tai-khoan',
  templateUrl: './tai-khoan.component.html',
  styleUrls: ['./tai-khoan.component.css']
})

export class TaiKhoanComponent implements OnInit {
  taikhoan: Taikhoan | undefined;
  taikhoans: Taikhoan[] = [];
  form!: FormGroup;
  selectedTaikhoan?: Taikhoan;
  constructor(
    private taikhoanService: TaikhoanService,
    private route: Router,
    public fb: FormBuilder) { }
  
  ngOnInit(): void {
    //this.getTaikhoans()
    this.form = this.fb.group({
      tentaikhoans: new FormControl(this.taikhoans[1], [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8)
      ]),
      
      tens: new FormControl(this.taikhoans[2], [
        Validators.required,
        Validators.maxLength(20)
      ]),
      ngaysinhs: new FormControl(this.taikhoans[3], [
        Validators.required
      ]),
      gioitinhs: new FormControl(this.taikhoans[4], [
        Validators.required
      ]),
      diachis: new FormControl(this.taikhoans[5], [
        Validators.required,
        Validators.maxLength(200)
      ]),
      emails: new FormControl(this.taikhoans[6], [
        Validators.required
      ]),
    })
  }
  add(tentaikhoan, ten, ngaysinh, gioitinh, diachi, email: string): void {
    tentaikhoan = tentaikhoan.trim();
    var avatar
    if (!tentaikhoan) { return; }
    if(this.gioitinhs?.value){
      if(this.gioitinhs.value=='Nam'){
        avatar ='nam.jpg'
      }
      else{
        avatar ='nu.jpg'
      }
    }  
       console.log(this.ngaysinhs)
    this.taikhoanService.addTaikhoan({ tentaikhoan, ten, ngaysinh, gioitinh, diachi, email, avatar} as Taikhoan)
      .subscribe(taikhoanf => { 
        this.taikhoans.push(taikhoanf)
        this.route.navigate(['/dashboard']);
      });
  }
  get tentaikhoans() {return this.form.get('tentaikhoans')}
  get tens() {return this.form.get('tens')}
  get ngaysinhs() {return this.form.get('ngaysinhs')}
  get gioitinhs() {return this.form.get('gioitinhs')}
  get diachis() {return this.form.get('diachis')}
  get emails() {return this.form.get('emails')}

}
