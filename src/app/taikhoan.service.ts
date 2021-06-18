import { Injectable, ViewChild } from '@angular/core';
import { Taikhoan } from './taikhoan';
import { TAIKHOANS } from './mock-taikhoan';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {DatePipe} from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export  class TaikhoanService {
  // getTaikhoans(): Taikhoan[] {
  //   return TAIKHOANS;
  // }
  /** Log a HeroService message with the MessageService */
  
  private taikhoansUrl = 'api/data';  // URL to web api
  
  // getTaikhoans(): Observable<Taikhoan[]> {
  //   const taikhoans = of(TAIKHOANS);
  //   this.messageService.add('TaikhoanService: fetched taikhoans')
  //   return taikhoans;
  // }
  getTaikhoans(): Observable<Taikhoan[]> {
    return this.http.get<Taikhoan[]>(this.taikhoansUrl)
    .pipe(
      tap(_ => this.log('fetched taikhoans')),
      catchError(this.handleError<Taikhoan[]>('getTaikhoans', []))
    );     
  }
  // getTaikhoanid(id: number): Observable<Taikhoan> {
  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   const taikhoan = TAIKHOANS.find(h => h.id === id)!;
  //   this.messageService.add(`TaikhoanService: fetched taikhoan id=${id}`);
  //   return of(taikhoan);
  // }
  /** GET hero by id. Will 404 if id not found */
  getTaikhoanid(id: number): Observable<Taikhoan> {
  const url = `${this.taikhoansUrl}/${id}`;
  return this.http.get<Taikhoan>(url).pipe(
    tap(_ => this.log(`fetched taikhoan id=${id}`)),
    catchError(this.handleError<Taikhoan
      >(`gettaikhoan id=${id}`))
  );
}
  /** PUT: update the hero on the server */
  updateTaikhoan(taikhoan: Taikhoan): Observable<any> {
    
  return this.http.put(this.taikhoansUrl, taikhoan, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${taikhoan.id}`)),
    catchError(this.handleError<any>('updateTaikhoan'))
  );
}
//   updateTaikhoan(taikhoan: Taikhoan): Observable<any> {
    
//     //const taikhoans = of(TAIKHOANS);
//     this.messageService.add(`TaikhoanService: fetched taikhoan id=${taikhoan.id}`);
//     return of(taikhoan);
// }
  /** POST: add a new hero to the server */
  addTaikhoan(taikhoan: Taikhoan): Observable<Taikhoan> {
  return this.http.post<Taikhoan>(this.taikhoansUrl, taikhoan, this.httpOptions).pipe(
    tap((newTaikhoan: Taikhoan) => this.log(`added tai khoan / id=${newTaikhoan.id}`)),
    catchError(this.handleError<Taikhoan>('addTaikhoan'))
  );
}
/** DELETE: delete the hero from the server */
  deleteTaikhoan(id: number): Observable<Taikhoan> {
  const url = `${this.taikhoansUrl}/${id}`;

  return this.http.delete<Taikhoan>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted tai khoan id=${id}`)),
    catchError(this.handleError<Taikhoan>('deleteTaikhoan'))
  );
}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  }
};
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
private log(message: string) {
  this.messageService.add(`TaikhoanService: ${message}`);
}

  constructor(private http: HttpClient,
    private messageService: MessageService) { }
}
