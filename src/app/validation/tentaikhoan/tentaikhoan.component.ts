import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentaikhoan',
  templateUrl: './tentaikhoan.component.html',
  styleUrls: ['./tentaikhoan.component.css']
})
export class TentaikhoanComponent implements OnInit, OnChanges {
  @Input() keyName
  @Input() lable=''

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.keyName)
  }

}
