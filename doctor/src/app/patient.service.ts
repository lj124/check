import { Injectable } from '@angular/core';

import { Patient } from './patient';
import 'rxjs/add/operator/map';
import { catchError, retry,map } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from 
'@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {




  private PatientRestUrl = 'http://localhost:8000/api/patient';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json' }) 
 };
  constructor(private httpClient : HttpClient) { }

  getPatientEntries() : Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.PatientRestUrl, this.httpOptions)
    .pipe(retry(3),catchError(this.httpErrorHandler));
 }
 
 getPatientManager(id: number) : Observable<Patient> {
    return this.httpClient.get<Patient>(this.PatientRestUrl + "/" + id, this.httpOptions)
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

 addPatientEntry(PatientEntry: Patient): Observable<Patient> {
  return this.httpClient.post<Patient>(this.PatientRestUrl, PatientEntry, this.httpOptions)
  .pipe(
     retry(3),
     catchError(this.httpErrorHandler)
  );
 
}
// editPatient(Patient:Patient): Observable<Patient> {
//    // const url = 'http://localhost:8000/api/patient/';
//    // return this.httpClient.put<Patient>(url, Patient,this.httpOptions).pipe(
//    //    retry(3),
//    //    catchError(this.httpErrorHandler)

//       return this.httpClient.put<Patient>('http://localhost:8080/api/patient',Patient);
//       this.httpClientService.updateBook(this.book).subscribe(
//    (book) => {
//      this.bookAddedEvent.emit();
//      this.router.navigate(['admin', 'books']);
//    }
//  );
updatePatient(updatedBook: Patient) {
   return this.httpClient.put<Patient>(this.PatientRestUrl , updatedBook);
 }
    
 }

//  updateContact(contact): Observable<Patient> {
//    const url = 'http://localhost:8000/api/patient/';
//    const body = {Name: contact.Name , EmailAddress: contact.Email, ContactNumber: contact.Gender,HomeAddress: contact.Age,Password:contact.Password };
//    return this.httpClient.put<Patient>(url + contact.id + '/', body,
//     this.httpOptions);
//  }

//  findPatient(Name:string): Observable<Patient> {
   // const url = 'http://localhost:8000/api/patient/'+Name;
   // return this.httpClient.get<Patient>(url, this.httpOptions)
   // .map(
   //    (res:Response)=>{
   //       return {status:res.status}
   //    }
   // )
//    .pipe(
//       retry(3),
//       catchError(this.httpErrorHandler)
//    );
//  }
// }
