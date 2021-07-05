import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Appointment } from 'src/app/appointment';
import { AppointmentService } from 'src/app/appointment.service';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {

  constructor(private fb: FormBuilder,private aptservice:AppointmentService,private router:Router) { }
    aptForm: FormGroup;
    ngOnInit(): void {
      this.aptForm = this.fb.group({
        // doctorid: ['', [Validators.required]],
        DoctorName: ['', [Validators.required]],
        Speciality: ['', [Validators.required]],
        PatientName: ['', [Validators.required]],
        PatientAge: ['', [Validators.required]],
        Gender:['', [Validators.required]],
        time:  ['', [Validators.required]],
        issue:['', [Validators.required]],
        date:['', [Validators.required]],
      
       
      
    
  
    })
  
    this.getAppointments();
    }
    // Appointment:Array<Appointment>=[];
    ap:Appointment[];
  //   doctorspeciality;
  //   doctorgender;
  //  doctorage;
  //   password;
  //   submitted=false;
    apt:Appointment=new Appointment()
  
   aptformdata: Appointment[]=[];
    onSubmit(data){
  
      if (this.aptForm.invalid) {
    
        // this.aptForm.get('DoctorName').markAsTouched();
        // this.aptForm.get('PatientName').markAsTouched();
        // this.aptForm.get('PatientAge').markAsTouched();
        // this.aptForm.get('Gender').markAsTouched();
        // this.aptForm.get('date').markAsTouched();
        // this.aptForm.get('time').markAsTouched();
        // this.aptForm.get('Speciality').markAsTouched();
        // this.aptForm.get('issue').markAsTouched();
        alert("All fields are required")
      }
  else{
    
  
         console.log(data);
        //  this.apt.id=this.aptForm.value.id;
         this.apt.DoctorName=this.aptForm.value.DoctorName;
         this.apt.Speciality=this.aptForm.value.Speciality;
         this.apt.PatientAge=this.aptForm.value.PatientAge;
         this.apt.Gender=this.aptForm.value.Gender;
         this.apt.date=this.aptForm.value.date;
         this.apt.time=this.aptForm.value.time;
         this.apt.issue=this.aptForm.value.issue;
         this.apt.PatientName=this.aptForm.value.PatientName;
        
         
        //  this.aptformdata.push(data);
        //  this.docservice.adddoctorEntry(this.doc).subscribe(res=>{
        //   console.log(res);
        //   alert("Success");
        // },err=>{
     
        //   alert("ndn");
        // }
        
        // )
        this.aptservice.addAppointmentEntry(this.apt)
        .subscribe( (_result) => this.getAppointments());
        alert("Success");
        
 }

         this.aptForm.reset();
     
       }
       getAppointments(){
       
        this.aptservice.getAppointmentEntries()
        .subscribe( data => this.aptformdata = data );
    
      }
  
        // ap:Observable<Appointment[]>
        delete(id:number): void {
          this.aptservice.deleteUser(id)
            .subscribe( data => {
              this.getAppointments();
              // this.ap = this.ap.filter(u => u === user);
              // this.router.navigate(['appointmemt']);
              alert("Appointment Cancelled")
            })
        };

      
    }
   
    //   this.api.deleteCases(id)
    //   .subscribe((res)=>{
    //     this.isLoading = false;
    //     this.router.navigate(['/cases']);
    //   }, err =>{
    //     console.log(err);
    //     this.isLoading = false;
    //   });
    // }
  
    
  
  



