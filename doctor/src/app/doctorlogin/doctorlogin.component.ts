import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Doctor } from '../doctor';
import { DoctorserviceService } from '../doctorservice.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent implements OnInit {
  // doctoremail: any;
//   @Input()
// patient:Patient;
  // constructor(private fb: FormBuilder,private docservice:DoctorserviceService) { }
  
//   doctorForm: FormGroup;
//   ngOnInit(): void {
//     this.doctorForm = this.fb.group({
//       doctorid: ['', [Validators.required]],
// //      doctorname: ['', [Validators.required]],
//       doctoremail: ['', [Validators.required,  Validators.pattern('^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
// //       doctorgender: new FormControl(this.doctorgender),
// //       doctorage:  new FormControl(this.doctorage),
// //       doctorspeciality:new FormControl(this.doctorspeciality),
    
//       password:['', ([Validators.required,  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[$@$!%*#?&])(?=.*?[0-9]).{8,20}$')])],
     
  

//   })
//   }

//   doctorspeciality;
//   doctorgender;
//  doctorage;
//   password;
//   submitted=false;
//  doctorformdata: Doctor[]=[

//   ];
  onSubmit(data){
//  this.submitted=true;
//     if (this.doctorForm.invalid) {
//       this.doctorForm.get('doctorid').markAsTouched();
//       this.doctorForm.get('doctorname').markAsTouched();
//       this.doctorForm.get('doctoremail').markAsTouched();
//     }
// else{
//     // if(this.doctorForm.valid){

//        console.log(data);
       
       
//        this.doctorformdata.push(data);
//        this.doctorForm.reset();
   
//        // if(!this.isformSubmitted){
//         // this.submitted=true
         
//        }
//       //  else{
//       //    alert("Name,email, id required")
//       //  }
      
    
//        // this.isfieldempty=true;
//      }
    }
    Email = ''
    Password = ''
    invalidLogin = false
  
    constructor(private router: Router,private loginservice: AuthenticationService) { }
  
    ngOnInit() {
    }
  
    checkLogin() {
      if (this.loginservice.authenticatedoctor(this.Email, this.Password)
      ) {
        this.router.navigate(['doctorhome'])
        this.invalidLogin = false
      } else
      alert("Invalid Credentials")
        this.invalidLogin = true
        
    }
  
  }
  

