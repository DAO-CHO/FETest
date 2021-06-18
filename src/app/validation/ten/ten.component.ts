import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-ten',
  templateUrl: './ten.component.html',
  styleUrls: ['./ten.component.css']
})
export class TenComponent implements OnInit, OnChanges {
  @Input() keyName
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.keyName)
  }
}
