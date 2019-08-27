import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EzstayhotelsService } from '../services/ezstayhotels.service';
import { HotelSearch } from '../models/hotel-search';
import { Hotel } from '../models/hotel';
import { EzstaybookingsService } from '../services/ezstaybookings.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ezstayhome',
  templateUrl: './ezstayhome.component.html',
  styleUrls: ['./ezstayhome.component.css']
})
export class EzstayhomeComponent implements OnInit {

  form: FormGroup;
  status = undefined;

  ngOnInit() {
    this.form = this.fb.group({
      city: ["", Validators.required],
      checkIn: ["", Validators.required],
      checkOut: ["", Validators.required],
      rooms: ["", Validators.required],
      guests: ["", Validators.required]
    });

    document.getElementById("ezStayGuests")["defaultValue"] = "0";
    document.getElementById("ezStayRooms")["defaultValue"] = "0";

    this.getHotels(this.hotelSearchParam);
  }



  constructor(private router:Router, private fb: FormBuilder, private ezstayhotelsService: EzstayhotelsService,
    private ezstaybookingsService: EzstaybookingsService) { }

  private hotelSearchParam: HotelSearch;
  private hotels: Hotel[] = [];

  getHotels(hotelSearchParam: any) {
    //const hotelsObservable = this.ezstayhotelsService.getHotelsByParam(hotelSearchParam);
    // hotelsObservable.subscribe((hotelsData: Hotel[]) => {
     // hotelsData[0]['hotelPhotoUrl'] = "https://ezstaystoragegroup.blob.core.windows.net/ezstayhotels/baglioni-hotel-london.jpg"
     //  this.hotels = hotelsData;
    // });
    this.hotels =  this.ezstayhotelsService.getHotelsByParam(hotelSearchParam);
    this.hotels[0]['hotelPhotoUrl'] = "https://ezstaystoragegroup.blob.core.windows.net/ezstayhotels/baglioni-hotel-london.jpg"
  }

  searchHotels() {
    this.getHotels(this.form.value);
  }

  bookHotel(hotel:any) {
    this.ezstaybookingsService.bookHotel(hotel);
    this.router.navigate(['/bookings',{hotel:JSON.stringify(hotel)}]);
  }
}
