import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-diachi',
  templateUrl: './diachi.component.html',
  styleUrls: ['./diachi.component.css']
})
export class DiachiComponent implements OnInit, OnChanges {
  @Input() keyName

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.keyName)
  }

}
