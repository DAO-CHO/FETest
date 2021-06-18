import { Injectable  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Taikhoan } from './taikhoan';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  dataSource;
  createDb() {
    const data = [
      { id: 11, ten: 'Ngọc Đào', tentaikhoan: 'ngocdao', ngaysinh: '1998/03/01', gioitinh: 'Nữ', diachi: 'Cà Mau', email: 'bffkantho1@gmail.com', avatar: 'nu.jpg' },
      { id: 12, ten: 'Diểm Ngân', tentaikhoan: 'diemngan', ngaysinh: '1998/03/02', gioitinh: 'Nữ', diachi: 'Tiền Giang', email: 'bffkantho2@gmail.com', avatar: 'nu.jpg' },
      { id: 13, ten: 'Hồng Đoan', tentaikhoan: 'hongdoan', ngaysinh: '1998/03/03', gioitinh: 'Nữ', diachi: 'Hậu Giang', email: 'bffkantho3@gmail.com', avatar: 'nu.jpg' },
      { id: 14, ten: 'Chí Hải', tentaikhoan: 'chihai', ngaysinh: '1998/03/04', gioitinh: 'Nam', diachi: 'Tiền Giang', email: 'bffkantho4@gmail.com', avatar: 'nam.jpg' },
      { id: 15, ten: 'Duy Tân', tentaikhoan: 'duytan', ngaysinh: '1998/03/05', gioitinh: 'Nam', diachi: 'Sóc Trăng', email: 'bffkantho5@gmail.com', avatar: 'nam.jpg' }
    ];
    this.dataSource = new MatTableDataSource(data);
    
    return {data};
  }
  genId(taikhoans: Taikhoan[]): number {
    return taikhoans.length > 0 ? Math.max(...taikhoans.map(taikhoan => taikhoan.id)) + 1 : 11;
  }
  
}
