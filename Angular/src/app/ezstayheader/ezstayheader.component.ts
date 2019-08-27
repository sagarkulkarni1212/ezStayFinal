import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ezstayheader',
  templateUrl: './ezstayheader.component.html',
  styleUrls: ['./ezstayheader.component.css']
})
export class EzstayheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logOut() {
    localStorage.removeItem("auth-token");
  }
}
