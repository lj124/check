import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { catchError, retry } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from 
'@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DoctorserviceService {
  


  private doctorRestUrl = 'http://localhost:8000/api/doctor';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json' }) 
 };
  constructor(private httpClient : HttpClient) { }

  getdoctorEntries() : Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.doctorRestUrl, this.httpOptions)
    .pipe(retry(3),catchError(this.httpErrorHandler));
 }
 
 getdoctorManager(id: number) : Observable<Doctor> {
    return this.httpClient.get<Doctor>(this.doctorRestUrl + "/" + id, this.httpOptions)
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

 adddoctorEntry(doctorEntry: Doctor): Observable<Doctor> {
  return this.httpClient.post<Doctor>(this.doctorRestUrl, doctorEntry, this.httpOptions)
  .pipe(
     retry(3),
     catchError(this.httpErrorHandler)
  );
 
}
}




