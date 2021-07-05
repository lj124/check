import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorserviceService } from '../doctorservice.service';
import { DoctorsignupComponent } from '../doctorsignup/doctorsignup.component';
import { Patient } from '../patient';

@Component({
  selector: 'app-doctorsearch',
  templateUrl: './doctorsearch.component.html',
  styleUrls: ['./doctorsearch.component.css'],
  
})
export class DoctorsearchComponent implements OnInit {

  constructor(private docservice:DoctorserviceService) { }
  // doc:Doctor;
  Doctor:Array<Doctor>=[];
  ngOnInit(): void {
    this.docservice.getdoctorEntries().subscribe(data=>{
      this.Doctor=data;
    },
      error=>{
        console.log(error);
      })
    }
  searchtext;
 
}  

