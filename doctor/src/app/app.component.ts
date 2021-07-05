import { Component } from '@angular/core';
import { Doctor } from './doctor';
import { DoctorserviceService } from './doctorservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doctor';
  myimage:string="assets/image/images.png"

  getBackgroundImageUrl() { 
    return `url(${this.myimage})` 
  } 
}
//   clicked:boolean=false;
//   docreg(){
//     this.clicked=true
//   }
 
//   patreg(){
//     this.clicked=true
//   }
//   constructor(public doctorservice: DoctorserviceService) { }
//  doc: Doctor[] = [];
//   ngOnInit() {
//   }
// }
