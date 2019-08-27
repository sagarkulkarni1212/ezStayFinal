import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EzstayheaderComponent } from './ezstayheader/ezstayheader.component';
import { EzstayfooterComponent } from './ezstayfooter/ezstayfooter.component';
import { EzstayhomeComponent } from './ezstayhome/ezstayhome.component';
import { EzloginComponent } from './ezlogin/ezlogin.component';
import { EzregisterComponent } from './ezregister/ezregister.component';
import { EzstaybookingsComponent } from './ezstaybookings/ezstaybookings.component';

@NgModule({
  declarations: [
    AppComponent,
    EzstayheaderComponent,
    EzstayfooterComponent,
    EzstayhomeComponent,
    EzloginComponent,
    EzregisterComponent,
    EzstaybookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
