import { Injectable } from '@angular/core';
import { Patient } from './patient';

import { catchError, retry } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from 
'@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Appointment } from './appointment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  
  private AppointmentRestUrl = 'http://localhost:8000/api/appointment';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json' }) 
 };
  constructor(private httpClient : HttpClient) { }

  getAppointmentEntries() : Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.AppointmentRestUrl, this.httpOptions)
    .pipe(retry(3),catchError(this.httpErrorHandler));
 }
 
 getAppointmentManager(id: number) : Observable<Appointment> {
    return this.httpClient.get<Appointment>(this.AppointmentRestUrl + "/" + id, this.httpOptions)
    .pipe(retry(3),
       catchError(this.httpErrorHandler)
    );
 }
  private httpErrorHandler (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
       console.error("A client side error occurs. The error message is " + error.message);
    } else {
       console.error(
          "An error happened in server. The HTTP status code is "  + error.status + " and the error returned is " + error.message);
    }
     return throwError("Error occurred. Pleas try again");
 }

 addAppointmentEntry(AppointmentEntry: Appointment): Observable<Appointment> {
  return this.httpClient.post<Appointment>(this.AppointmentRestUrl, AppointmentEntry, this.httpOptions)
  .pipe(
     retry(3),
     catchError(this.httpErrorHandler)
  );
 
}
// deleteA(id: any, smartphone: Appointment): Observable<Appointment> {
//    return this.httpClient.delete<Appointment>(this.AppointmentRestUrl + id, this.httpOptions)
//      .pipe(
//        catchError(this.httpErrorHandler)
//      );
//  }
// delete(id: number): Observable<any> {
  
//    return this.httpClient
//      .delete<Appointment>(url, this.httpOptions)
//    //   .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));
//  }

   
   deleteUser(id: number): Observable<Appointment> {
      const url = 'http://localhost:8000/api/appointment/'+id;
      return this.httpClient.delete<Appointment>(url);
    }


}

