import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EzstaybookingsService {

  private _url = "http://13.76.222.107/api/hotel";

  constructor(private http: HttpClient) { }

  bookHotel(hotel: any): any {
    let params = new HttpParams().set('hotelData', JSON.stringify(hotel));
    return this.http.get<any>(this._url,{params: params});
  }
}
