import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HotelSearch } from '../models/hotel-search';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class EzstayhotelsService {

  private mockHotels:any=[{
  
    "name": "Orchid Hotel 1",
    "rating": 4,
    "address": "Hinjeawdi phase 3 Pune",
    "city": "Pune",
    "phone": "1234567899",
    "hotelPhotoUrl": "C:/Users/huser/AppData/Local/Temp/baglioni-hotel-london.jpg",
    "rooms": [
      {
        
        
        "name": "Deluxe",
        "occupancy": 3,
        "roomType": "King",
        "amenities": [
          {
            
            "isWIFI": true,
            "isAC": true,
            "isSwimingPool": true
          }
        ]
      }
    ]
  }];

  private _url = "http://13.67.75.64/api/hotel";

  constructor(private http: HttpClient) { }

  getHotelsByParam(hotelSearch: any): any {
    let cityFilter = hotelSearch ? hotelSearch['city'] : null; 
     //let params = new HttpParams().set('hotelSearchParams', JSON.stringify(hotelSearch));
     //return this.http.get<Hotel[]>(this._url,{params: params});
     //return this.http.get<Hotel[]>(cityFilter ? this._url+"/"+cityFilter : this._url);
     return this.mockHotels;
  }

}
