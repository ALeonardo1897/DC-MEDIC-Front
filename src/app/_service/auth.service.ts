import { Injectable } from '@angular/core';
import { User } from '../_model/user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: User;
  private _token: string;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService) { }

  public get user(): User {
    if (this._user != null) {
      return this._user;
    } else if (localStorage.getItem("USER") != null) {
      this._user = JSON.parse(localStorage.getItem("USER")) as User;
      return this._user;
    }
    return null;
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (localStorage.getItem("ACCESS_TOKEN") != null) {
      this._token = localStorage.getItem("ACCESS_TOKEN");
      return this._token;
    }
    return null;
  }

  login(user: User) {
    //console.log(user);
    let header = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      //"Authorization" : "Basic " + btoa(environment.CREDENTIALS_APP_USER + ":" + environment.CREDENTIALS_APP_PASS) 
    });

    let data = new URLSearchParams();
    data.set("email", user.email);
    data.set("password", user.password);

    return this.http.post(environment.BACKEND_IP + "/login/", data.toString(), { headers: header });
  }

  storeToken(token: string) {
    this._token = token;
    localStorage.setItem("ACCESS_TOKEN", token);
    let payload = JSON.parse(atob(token.split(".")[1]));
    //console.log(payload);
    this.storeUser(payload);
  }

  private storeUser(payload) {
    this._user = new User();
    this._user.first_name = payload.first_name;
    this._user.last_name = payload.last_name;
    this._user.email = payload.email;

    localStorage.setItem("USER", JSON.stringify(this._user));
  }

  isAuth(){
    const token = localStorage.getItem('ACCESS_TOKEN');

    return !this.jwtHelper.isTokenExpired(token);
  }

  logout(){
    this._token = null;
    this._user = null;
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER");
  }


}
