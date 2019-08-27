import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ezstaybookings',
  templateUrl: './ezstaybookings.component.html',
  styleUrls: ['./ezstaybookings.component.css']
})
export class EzstaybookingsComponent implements OnInit {
  private hotel: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.hotel = JSON.parse(this.route.snapshot.paramMap.get("hotel"));
  }
}
