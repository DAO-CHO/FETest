import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaiKhoanComponent } from './tai-khoan/tai-khoan.component';
import { TaikhoanDetailsComponent } from './taikhoan-details/taikhoan-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { environment } from 'src/environments/environment';
import { TentaikhoanComponent } from './validation/tentaikhoan/tentaikhoan.component';
import { TenComponent } from './validation/ten/ten.component';
import { NgaysinhComponent } from './validation/ngaysinh/ngaysinh.component';
import { GioitinhComponent } from './validation/gioitinh/gioitinh.component';
import { DiachiComponent } from './validation/diachi/diachi.component';
import { EmailComponent } from './validation/email/email.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table' 
import { MatSortModule } from '@angular/material/sort';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
@NgModule({
  declarations: [
    AppComponent,
    TaiKhoanComponent,
    TaikhoanDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    HomeComponent,
    TentaikhoanComponent,
    TenComponent,
    NgaysinhComponent,
    GioitinhComponent,
    DiachiComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    DragDropModule,
    MatButtonToggleModule,
    DatePickerModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
    //BsDatepickerModule.forRoot(),
    environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
