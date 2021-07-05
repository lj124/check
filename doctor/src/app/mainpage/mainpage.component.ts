import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.logOutp();
    this.authService.logOutd();
    this.router.navigate(['']);
  }

}
