import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { PateintloginComponent } from './pateintlogin/pateintlogin.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppointmentAddComponent } from './appointment/appointment-add/appointment-add.component';
// import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component'
import { DoctorserviceService } from './doctorservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { DoctorComponent } from './doctor/doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { HomeComponent } from './home/home.component';
import { PateintsignupComponent } from './pateintsignup/pateintsignup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DoctorsearchComponent } from './doctorsearch/doctorsearch.component';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { FilterPipe } from './filter.pipe';
import { authInterceptorProviders } from './_helper/auth.interceptor';
import { MedicalrecordComponent } from './medicalrecord/medicalrecord.component';
import { PatientrequestComponent } from './patientrequest/patientrequest.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { Patient } from './patient';
import { PatienteditComponent } from './patientedit/patientedit.component';
@NgModule({
  declarations: [
    AppComponent,
    DoctorloginComponent,
    PateintloginComponent,
    AppointmentAddComponent,
    // AppointmentListComponent,
    PatienthomeComponent,

    DoctorComponent,
     DoctorsignupComponent,
     HomeComponent,
     PateintsignupComponent,
     MainpageComponent,
     DoctorsearchComponent,
     DoctorhomeComponent,
     FilterPipe,
     MedicalrecordComponent,
     PatientrequestComponent,
     PatientprofileComponent,
     LogoutComponent,
     PatienteditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    BrowserAnimationsModule,
    MatToolbarModule,
  MatCardModule,
  MatButtonModule

  ],
  
  providers: [DoctorserviceService, HttpClientModule,
    HttpClient,authInterceptorProviders,Patient],
  bootstrap: [AppComponent],
    
  entryComponents:[DoctorloginComponent]
})
export class AppModule { }

