import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientserviceService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-pateintsignup',
  templateUrl: './pateintsignup.component.html',
  styleUrls: ['./pateintsignup.component.css']
})
export class PateintsignupComponent implements OnInit {

@Input()


  patientForm: FormGroup;
 
  
  constructor(private fb: FormBuilder,private patservice:PatientserviceService) { }
    ngOnInit(): void {
      this.patientForm = this.fb.group({
        // Patientid: ['', [Validators.required]],
       Name: ['', [Validators.required]],
        Email: ['', [Validators.required,  Validators.pattern('^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
       Gender: new FormControl(this.Gender),
        Age:  new FormControl('',[Validators.required]),
     
      
        Password:['', ([Validators.required,  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[$@$!%*#?&])(?=.*?[0-9]).{8,20}$')])],
      
    
  
    })
    this.getPatients();
    }
  
    Gender
   Age;
    Password;
    submitted=false;
    pat:Patient=new Patient()
   patientformdata: Patient[]=[];
    onSubmit(data){
   this.submitted=true;
      if (this.patientForm.invalid) {
    
        this.patientForm.get('Name').markAsTouched();
        this.patientForm.get('Email').markAsTouched();
        alert("All fields are Required")
      }
  else{
    
  
         console.log(data);
         this.pat.Name=this.patientForm.value.Name;
         this.pat.Age=this.patientForm.value.Age;
         this.pat.Password=this.patientForm.value.Password;
         this.pat.Email=this.patientForm.value.Email;
         this.pat.Gender=this.patientForm.value.Gender;
        //  this.pat.Password=this.patientForm.value.Patientspeciality;
        
         
         this.patientformdata.push(data);
        //  this.docservice.addPatientEntry(this.doc).subscribe(res=>{
        //   console.log(res);
        //   alert("Success");
        // },err=>{
     
        //   alert("ndn");
        // }
        
        // )
        this.patservice.addPatientEntry(this.pat)
        .subscribe( (_result) => this.getPatients());
        alert("Success");
        
 }

         this.patientForm.reset();
     
       }
       getPatients(){
       
        this.patservice.getPatientEntries()
        .subscribe( data => this.patientformdata = data );
    
      }}
  
    
  