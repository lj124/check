import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-pateintlogin',
  templateUrl: './pateintlogin.component.html',
  styleUrls: ['./pateintlogin.component.css']
})
export class PateintloginComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // constructor(private fb: FormBuilder) { }
//   doctorForm: FormGroup;
  // ngOnInit(): void {
//     this.doctorForm = this.fb.group({
//       userid: ['', [Validators.required]],
//      doctorname: ['', [Validators.required]],
//       doctoremail: ['', [Validators.required,  Validators.pattern('^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
//       doctorgender: new FormControl(this.doctorgender),
//       doctorage:  new FormControl(this.doctorage),
//       doctorspeciality:new FormControl(this.doctorspeciality),
    
//       password:['', ([Validators.required,  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[$@$!%*#?&])(?=.*?[0-9]).{8,20}$')])],
     
  

//   })
//   }
//   doctorspeciality;
//   doctorgender;
//  doctorage;
//   password;
//   submitted=false;
//  doctorformdata: Patient[]=[

//   ];
//   onSubmit(data){
//  this.submitted=true;
// //     if (this.doctorformdata.invalid) {
// //       this.doctorformdata.get('doctorid').markAsTouched();
// //       this.doctorformdata.get('doctorname').markAsTouched();
// //       this.doctorformdata.get('doctoremail').markAsTouched();
// //     }
// // else{
//     if(this.doctorForm.valid){

//        console.log(data);
       
       
//        this.doctorformdata.push(data);
//        this.doctorForm.reset();
   
//        // if(!this.isformSubmitted){
//         // this.submitted=true
         
//        }
//        else{
//          alert("Name,email, id required")
//        }
      
    
//        // this.isfieldempty=true;
    //  }
    // }Name:string | undefined;
    // Name:string | undefined;
    // Age:string | undefined;
  
    // Gender:string | undefined;
    // Email:string | undefined;
    // Password:string | undefined;
    // form:FormGroup | undefined;
   
    // formdata:FormGroup;
    // List:any=[];
    // private formCol:Patient = new Patient();
  
  
    // ngOnInit() {
    
      //  this.formdata=this.fb.group({
      //   Name: new FormControl(""),
      // //   Age: new FormControl(""),
      // //   Gender: new FormControl(""),
      // //   Email:new FormControl("",[Validators.required,  Validators.pattern('^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
      //   Password: new FormControl("",[Validators.required,  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[$@$!%*#?&])(?=.*?[0-9]).{8,20}$')])
  
       
      // })
  // }
    
    // onSubmit(data:any)
    // {
  //     if (this.formdata.invalid) {
  //       this.formdata.get('Email').markAsTouched();
  //       this.formdata.get('Password').markAsTouched();
    
  //     }
  // else{
  //     this.Name=data.Name,
  //    this.Age=data.Age,
  //    this.Gender=data.Gender,
  //    this.Email=data.Email,
  //    this.Password=data.Password
  
  
  
  // this.List= this.formCol.storeData(this.formdata);
  //     console.log(this.List);
  //     this.formdata.reset();
    
      
     
  //   }}
  //   deleteRow(){
  //     const index=this.List.indexOf(); 
  //     this.List.splice(index,1);
  //    }
  // }}
  Email = ''
  Password = ''
  invalidLogin = false

  constructor(private router: Router,private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.Email, this.Password)
    ) {
      // alert("Invalid Credentials")
      this.router.navigate(['patienthome'])
      this.invalidLogin = false
      // alert("Invalid Credentials")
    } else
      alert("Invalid Credentials")
      this.invalidLogin = true
   
  }

}