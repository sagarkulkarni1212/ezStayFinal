import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EzloginComponent } from './ezlogin/ezlogin.component';
import { EzregisterComponent } from './ezregister/ezregister.component';
import { AppComponent } from './app.component';
import { EzstayhomeComponent } from './ezstayhome/ezstayhome.component';
import { AuthGuardGuard } from './guards/auth.guard';
import { EzstaybookingsComponent } from './ezstaybookings/ezstaybookings.component';


const routes: Routes = [
  { path: '', component: EzstayhomeComponent },
  { path: 'login', component: EzloginComponent },
  { path: 'register', component: EzregisterComponent },
  { path: 'bookings', component: EzstaybookingsComponent }
  // { path: '*', redirectTo:"/home", pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
