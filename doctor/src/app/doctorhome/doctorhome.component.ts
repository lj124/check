import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrls: ['./doctorhome.component.css']
})
export class DoctorhomeComponent implements OnInit {

  constructor(public loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

}
