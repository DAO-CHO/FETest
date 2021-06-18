import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-gioitinh',
  templateUrl: './gioitinh.component.html',
  styleUrls: ['./gioitinh.component.css']
})
export class GioitinhComponent implements OnInit, OnChanges {
  @Input() keyName

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.keyName)
  }

}
