import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ezregister',
  templateUrl: './ezregister.component.html',
  styleUrls: ['./ezregister.component.css']
})
export class EzregisterComponent implements OnInit {

  form: FormGroup;
  status = undefined;
  constructor(private fb: FormBuilder, private userSvc: UserService) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(8)])],
      contactNumber:["", Validators.compose([Validators.required, Validators.minLength(10)])]
    });
  }

  register() {
    this.status=undefined;

    if (this.form.valid) {
      this.userSvc.addUser(this.form.value)
        .subscribe(result => {
          console.log(result);
          this.status = { success: true, class: "alert-success", message: "User registered successfully" }
        },
          err => {
            console.log(err);
            this.status = { success: false, class: "alert-danger", message: "User registration failed" }
          }

        );
    }
    else {
      this.status = { success: false, class: "alert-danger", message: "Invalid user details" }
    }
  }

}
