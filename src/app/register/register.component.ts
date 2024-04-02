import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  username: string = '';
  password: string = '';


  // constructor(private autService: AuthenticationService, private router: Router) {
  // }

  // onsubmit() {
  //   this.autService.login(this.username, this.password).subscribe(
  //     data => {
  //       if (data.success) {
  //         // Token saved
  //         this.autService.saveToken(data.token);
  //         // Navigate
  //         this.router.navigate(['/home']);
  //       } else {
  //         console.log("Login error");
  //       }
  //     },
  //     error => {
  //       console.log("Login error");
  //     }
  //   );
  // }






  
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['Usernameni Kiriting', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      name1: ['Familyangizni Kiriting',  [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      email: ['Emalingizni Kiriting', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password1: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      // checkbox: [false, Validators.requiredTrue]
    });
  }

  onsubmit() {
    console.log(this.myForm.value);
  }

  
}
