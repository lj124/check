import { Injectable, OnInit } from '@angular/core';
import { Doctor } from './doctor';
import { DoctorserviceService } from './doctorservice.service';
import { Patient } from './patient';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {
//   pat:Array<Patient>;
//   Email: any;
//   constructor() { }
//   authenticate(Email, Password) {
//     if (Email === "a" && Password === "a") {
//       sessionStorage.setItem('Email', Email)
//       return true;
//     } else {
//       return false;
//     }
//   }
//   isUserLoggedIn() {
//     let user = sessionStorage.getItem('Email')
//     console.log(!(user === null))
//     return !(user === null)
//   }

//   logOut() {
//     sessionStorage.removeItem('Email')
//   }

// }



// import { HttpClient } from '@angular/common/http';
// import { Injectable, OnInit } from '@angular/core';
// import { Patient } from './patient';
import { PatientserviceService } from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  list: any;
  list1:any;
  l: Patient[];
  d: Doctor[];
  json;
  jso;
  constructor(private HttpClient: PatientserviceService,private docHttpClient:DoctorserviceService) {
    this.HttpClient.getPatientEntries().subscribe(response => this.handleSuccessfulResponse(response));
    this.docHttpClient.getdoctorEntries().subscribe(response => this.handleSuccessfulResponsefordoctor(response));
    // for(var i=0;i<this.l.length;i++){
    //   console.log("users "+this.l[i]);
    // }    
  }

  ngOnInit() {
  }

  handleSuccessfulResponse(response) {
    this.list = response;
    this.l = new Array<Patient>();
    for (const p of this.list) {
      const user = new Patient();
      user.id = p.id;
      user.Name = p.name;
      user.Gender = p.Gender;
      user.Age = p.Age;
      user.Password = p.Password;
      user.Email = p.Email;
      this.l.push(user);
    }
 
  }

  handleSuccessfulResponsefordoctor(response) {
    this.list1 = response;
    this.d = new Array<Doctor>();
    for (const p of this.list1) {
      const userdoc = new Doctor();
      userdoc.doctorid = p.id;
      userdoc.doctorname = p.doctorname;
      userdoc.doctorgender = p.doctorgender;
      userdoc.doctorage = p.dge;
      userdoc.password = p.password;
      userdoc.doctoremail = p.doctoremail;
      this.d.push(userdoc);
    }
 
  }
  //   getUsers(): void {
  //     this.HttpClient.getUsers().then(users => {
  //            this.users = users
  //            console.log('this.users=' + this.users);
  //         });


  // }
  checkuser() {

    // this.HttpClient.getUsers().subscribe((response:Array<User>) => {
    //   this.list=response;
    //   console.log("res"+response);
    //   this.list.forEach((element=>{
    //     this.l.push(element);
    //   }))  
    //   this.json=JSON.stringify(this.l);
    //   console.log(this.json);
    // })
    // this.list.forEach((element=>{
    //   this.l.push(element);
    //   console.log("users "+element);

    // }))  
    // for(var i=0;i<this.list.length;i++){
    //     console.log("users "+this.list[i]);
    //   }

    this.jso = this.json;

    // for(var i=0;i<this.l.length;i++){
    //   console.log("users" +this.l[i].name);
    // }
    // console.log("users" +this.l);
    // return this.jso;
  }

  flag;
  flag1;
  // data = [{
  //   name: "yamini",
  //   password: "Password@4",
  //   type: 'admin'

  // }, {
  //   name: "impana",
  //   password: "Password@45",
  //   type: 'user'
  // },
  // ]

  authenticate(Email, password) {
    // this.json=this.checkuser();
    // console.log("json"+this.l.length);
    // this.json=JSON.stringify(this.l);
    // console.log("12"+this.json);
    for(var i=0;i<this.l.length;i++){
      console.log("value"+ this.l[i].Name);
    }
    for (var i = 0; i < this.l.length; i++) {

      if (Email === this.l[i].Email && password === this.l[i].Password) {
        sessionStorage.setItem('username', Email)
        this.flag = true;
        break;
      } else {
        this.flag = false;
     
      }
    }
    return this.flag;

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  // isUserAdmin() {
  //   let user = sessionStorage.getItem('username');
  //   let type, flag;
  //   console.log("json-1"+this.l.length);
  //   // this.json=JSON.stringify(this.l);
  //   // this.checkuser();
  //   for (var i = 0; i < this.l.length; i++) {
  //     if (user === this.l[i].name) {
  //       type = this.l[i].type;
  //       console.log("hi" + type);
  //       if (type === 'admin') {
  //         flag = true;
  //       } else {
  //         flag = false;
  //       }
  //     }
  //   }
  //   console.log("12 " + this.flag);
  //   return flag;
  // }
  authenticatedoctor(doctoremail, password) {
    // this.json=this.checkuser();
    // console.log("json"+this.d.length);
    // this.json=JSON.stringify(this.l);
    // console.log("12"+this.json);
    for(var i=0;i<this.d.length;i++){
      // console.log("value"+ this.d[i].doctorname);
    }
    for (var i = 0; i < this.d.length; i++) {

      if (doctoremail === this.d[i].doctoremail && password === this.d[i].password) {
        sessionStorage.setItem('username', doctoremail)
        this.flag1 = true;
        break;
      } else {
        this.flag1 = false;
      }
    }
    return this.flag1;

  }
  // isUserLoggedIn1() {
  //   let user = sessionStorage.getItem('username');
  //   return !(user === null);
  // }

  logOutp() {
    sessionStorage.removeItem('username')
  }
  logOutd() {
    sessionStorage.removeItem('username')
  }
}