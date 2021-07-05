import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PateintloginComponent } from '../pateintlogin/pateintlogin.component';
import { Patient } from '../patient';
import { PatientserviceService } from '../patient.service';

@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.css']
})
export class PatientprofileComponent implements OnInit {
  // Gender: any;
 l:Patient[];
 pat:Patient;
  Email='';
  Password='';
  F
  constructor(private patservice:PatientserviceService,private router:Router,private fb:FormBuilder) { }
profileForm:FormGroup;
  ngOnInit(): void {
    // this.patservice.get(localStorage.getItem('username')).subscribe(
    for(var i=0;i<this.l.length;i++){
      
    this.profileForm=this.fb.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required,  Validators.pattern('^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
     Gender: new FormControl(''),
      Age:  new FormControl('',[Validators.required]),
   
    
      Password:['', ([Validators.required,  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[$@$!%*#?&])(?=.*?[0-9]).{8,20}$')])],
    })
   
    }

  
  }
  cancel(){
    this.router.navigate['/patientprofile']
  }
  update(){
    // this.patservice.editPatient(this.pat)
    //     .subscribe( (_result) => this.getPatientEntries());
    //     alert("Success");}
   
    //   this.router.navigate(['/patientprofile'], { queryParams: { action: 'edit', id: this.pat.id } });
    this.patservice.updatePatient(this.pat).subscribe(
      (data) => {
        // this.bookAddedEvent.emit();
        this.router.navigate(['/patientprofile']);
      }
    );
    

}
// list:any;



// }



//  updateBook(updatedBook: Book) {
//   return this.httpClient.put<Book>('http://localhost:8080/books/update', updatedBook);
// }
// this is service file
// @PutMapping("/update")
// public void updateBook(@RequestBody Book book) {
//   bookRepository.save(book);
// }


}
