import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/_model/user.model';
import { AuthService } from 'src/app/_service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    if(this.authService.isAuth()){
      this.router.navigate(['pacientes']);
    }
    
    this.loginForm = new FormGroup({
      'email' : new FormControl("",[Validators.email,Validators.required]),
      'password' : new FormControl("",[Validators.minLength(5),Validators.required])
    })

  }

  login(data: any){

    let user = new User;
    user.email = data.email; 
    user.password = data.password;

    this.authService.login(user).subscribe( 
      res => {
        this.authService.storeToken(res["access"]);
        this.router.navigate(["/pacientes"]);
      },
      err => {
        console.log(err);
      }
    );

  }

}
