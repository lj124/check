import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentAddComponent } from './appointment/appointment-add/appointment-add.component';
import { AuthGaurdService } from './auth-guard.service';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { DoctorsearchComponent } from './doctorsearch/doctorsearch.component';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { LogoutComponent } from './logout/logout.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MedicalrecordComponent } from './medicalrecord/medicalrecord.component';
import { PateintloginComponent } from './pateintlogin/pateintlogin.component';
import { PateintsignupComponent } from './pateintsignup/pateintsignup.component';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';
import { PatientrequestComponent } from './patientrequest/patientrequest.component';
const routes: Routes = [
 

  {
    path: "",
   
    component: MainpageComponent
  },

  { path: 'appointment', component: AppointmentAddComponent,canActivate:[AuthGaurdService]  },
  { path: 'search', component: DoctorsearchComponent,canActivate:[AuthGaurdService]  },
  { path: 'logout', component: MainpageComponent},
  { path: 'patientprofile', component: PatientprofileComponent},
  // { path: 'login', component: LoginComponent },
  {
    path: "doctorhome",
    component: DoctorhomeComponent,canActivate:[AuthGaurdService] 
  },
    

  
  {
    path: "patientsignup",
    component: PateintsignupComponent,
   
    // children: [
    //   {
    //     path: "patienthome",
    //     component: PatienthomeComponent
    //   },
     
    //   {
    //     path: "appointment",
    //     component: AppointmentAddComponent
    //   },
     
    // ],

  },
  {
    path: "patientlogin",
   
    component: PateintloginComponent
  },
 
{
  path: "patienthome",
 
  component: PatienthomeComponent,canActivate:[AuthGaurdService] 
},


{path: 'patreq',component:PatientrequestComponent,canActivate:[AuthGaurdService] },
{path: 'medicalrecord', component:MedicalrecordComponent,canActivate:[AuthGaurdService] },
  {
    path: "doctorlogin",
   
    component: DoctorloginComponent
  },

  {
    path: 'doctorsignup', component: DoctorsignupComponent ,
    
  
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents:[MainpageComponent]
})
export class AppRoutingModule { }

  

