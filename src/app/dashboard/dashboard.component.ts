import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Taikhoan } from '../taikhoan';
import { TaikhoanService } from '../taikhoan.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTable} from '@angular/material/table';
import { Sort} from '@angular/material/sort';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  toggle() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  @ViewChild('table') table!: MatTable<Taikhoan>;
  taikhoans: Taikhoan[] = [];
  constructor(private taikhoanService: TaikhoanService) { }

  ngOnInit(): void {
    this.getTaikhoans()
  }
  getTaikhoans(): void {
    this.taikhoanService.getTaikhoans()
        .subscribe(taikhoanss => this.taikhoans = taikhoanss);
  }

  dropTable(event: CdkDragDrop<Taikhoan[]>) {
    const prevIndex = this.taikhoans.findIndex((d) => d === event.item.data);
    moveItemInArray(this.taikhoans, prevIndex, event.currentIndex);
  }
  
  delete(taikhoan: Taikhoan): void {
    this.taikhoans = this.taikhoans.filter(h => h !== taikhoan);
    this.taikhoanService.deleteTaikhoan(taikhoan.id).subscribe();
  }
}
