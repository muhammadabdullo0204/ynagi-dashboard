import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  name: string = '';
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private autService: AuthenticationService,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });
  }

  onsubmit() {
    if (this.myForm.valid) {
      const { name, password } = this.myForm.value;
      this.autService.login(name, password).subscribe(
        data => {
          if (data.success) {
            // Token saved
            this.autService.saveToken(data.token);
            // Navigate
            this.router.navigate(['/home']);
          } else {
            console.log("Login error");
          }
        },
        error => {
          console.log("Login error");
        }
      );
    }
  }

  
}

