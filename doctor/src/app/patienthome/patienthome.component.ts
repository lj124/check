import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-patienthome',
  templateUrl: './patienthome.component.html',
  styleUrls: ['./patienthome.component.css']
})
export class PatienthomeComponent implements OnInit {

  constructor(public loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

}
