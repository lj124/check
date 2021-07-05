import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-patientrequest',
  templateUrl: './patientrequest.component.html',
  styleUrls: ['./patientrequest.component.css']
})
export class PatientrequestComponent implements OnInit {
  presentDate = new Date(); 
  constructor(private aptservice:AppointmentService) { }
  Apt:Appointment=new Appointment();
  At:Array<Appointment>=[];
  Doc:Doctor=new Doctor();
  ngOnInit(): void {
    if(this.Apt.DoctorName===this.Doc.doctorname){
      this.aptservice.getAppointmentEntries().subscribe(data=>{
        this.At=data;
      },
        error=>{
          console.log(error);
        })
      }
    }
  


}
