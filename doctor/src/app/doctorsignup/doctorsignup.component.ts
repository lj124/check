import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../doctor';
import { DoctorserviceService } from '../doctorservice.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-doctorsignup',
  templateUrl: './doctorsignup.component.html',
  styleUrls: ['./doctorsignup.component.css']
})
export class DoctorsignupComponent implements OnInit {

  @Input()
  patient:Patient;
    constructor(private fb: FormBuilder,private docservice:DoctorserviceService) { }
    doctorForm: FormGroup;
    ngOnInit(): void {
      this.doctorForm = this.fb.group({
        // doctorid: ['', [Validators.required]],
       doctorname: ['', [Validators.required]],
        doctoremail: ['', [Validators.required,  Validators.pattern('^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
        doctorgender: new FormControl(this.doctorgender),
        doctorage:  new FormControl(this.doctorage),
        doctorspeciality:new FormControl(this.doctorspeciality),
      
        password:['', ([Validators.required,  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[$@$!%*#?&])(?=.*?[0-9]).{8,20}$')])],
      
    
  
    })
    this.getDoctors();
    }
  
    doctorspeciality;
    doctorgender;
   doctorage;
    password;
    submitted=false;
    // d:Doctor=new Doctor()
    doc:Doctor=new Doctor()
   doctorformdata: Doctor[]=[];
    onSubmit(data){
   this.submitted=true;
      if (this.doctorForm.invalid) {
    
        // this.doctorForm.get('doctorname').markAsTouched();
        // this.doctorForm.get('doctoremail').markAsTouched();
        // this.doctorForm.get('password').markAsTouched();
        // this.doctorForm.get('doctorage').markAsTouched();
        alert("All fields are required")
      }
  else{
   
        if(this.doc.doctoremail in this.doc)
         console.log(data);
         this.doc.doctorname=this.doctorForm.value.doctorname;
         this.doc.doctorage=this.doctorForm.value.doctorage;
         this.doc.password=this.doctorForm.value.password;

         this.doc.doctoremail=this.doctorForm.value.doctoremail;
         this.doc.doctorgender=this.doctorForm.value.doctorgender;
         this.doc.doctorspeciality=this.doctorForm.value.doctorspeciality;
        
         
        //  this.doctorformdata.push(data);
        //  this.docservice.adddoctorEntry(this.doc).subscribe(res=>{
        //   console.log(res);
        //   alert("Success");
        // },err=>{
     
        //   alert("ndn");
        // }
        
        // )
        this.docservice.adddoctorEntry(this.doc)
        .subscribe( (_result) => this.getDoctors());
        alert("Success");
        
 }

         this.doctorForm.reset();
     
       }
       getDoctors(){
       
        this.docservice.getdoctorEntries()
        .subscribe( data => this.doctorformdata = data );
    
      }}
  
    
  