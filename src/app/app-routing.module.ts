import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TaiKhoanComponent } from './tai-khoan/tai-khoan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaikhoanDetailsComponent } from './taikhoan-details/taikhoan-details.component';
import { HomeComponent } from './home/home.component'
const routes: Routes = [
  { path: 'taikhoans', component: TaiKhoanComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: TaikhoanDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
