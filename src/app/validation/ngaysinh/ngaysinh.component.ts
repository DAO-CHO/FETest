import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-ngaysinh',
  templateUrl: './ngaysinh.component.html',
  styleUrls: ['./ngaysinh.component.css']
})
export class NgaysinhComponent implements OnInit, OnChanges {
  // @Input() keyName = new Date()
  @Input() keyName
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    // console.log(this.datePipe.transform(this.keyName,"yyyy-MM-dd"))
    console.log(this.keyName)
  }

}
