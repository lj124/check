import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientserviceService } from '../patient.service';

@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.css']
})
export class PatientprofileComponent implements OnInit {
  Gender: any;
pat:Patient;
Name='';


  constructor(private patservice:PatientserviceService,private router:Router,private fb:FormBuilder) { }
profileForm:FormGroup;
  ngOnInit(): void {
    
    // this.patservice.get(localStorage.getItem('username')).subscribe(

    // this.profileForm=this.fb.group({
    //   Name: [res.result.Name, [Validators.required]],
    //   Email: [res.result.Email, [Validators.required,  Validators.pattern('^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
    //  Gender: new FormControl(res.result.Gender),
    //   Age:  new FormControl(res.result.Age,[Validators.required]),
   
    
    //   Password:['', ([Validators.required,  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[$@$!%*#?&])(?=.*?[0-9]).{8,20}$')])],
    // })
  
  }
  cancel(){
    this.router.navigate['/patientprofile']
  }
  update(){
    // this.patservice.addPatientEntry(this.pat)
    //     .subscribe( (_result) => this.getPatients());
    //     alert("Success");
    this.patservice.updateContact(this.pat.id).subscribe(
      data => {

        this.getContacts();
      },
      error => {
       
      }
    );
  }
  contacts:Patient[]
  getContacts = () => {
     
    this.patservice.getPatientEntries().subscribe(
      data => {
        this.contacts = data;
        
      },
      error => {
       
      }
    );
  }

}
