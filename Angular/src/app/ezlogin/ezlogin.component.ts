import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ezlogin',
  templateUrl: './ezlogin.component.html',
  styleUrls: ['./ezlogin.component.css']
})
export class EzloginComponent implements OnInit {
  form: FormGroup;
  status = undefined;
  constructor(private fb: FormBuilder, private router: Router, private userSvc: UserService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }


  login() {
    if (this.form.valid) {

      this.userSvc.getToken(this.form.value)
        .subscribe(
          result => {
            localStorage.setItem("auth-token", JSON.stringify(result));
            this.router.navigate(['/']);
          },
          err => {
            this.status = { class: "alert-danger", message: "Login failed:invalid user credentials" }
          }
        );
    } else {
      this.status = { class: "alert-danger", message: "invalid user data" }
    }
  }
}
