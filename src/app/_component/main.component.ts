import { Component, OnInit } from '@angular/core';
import { NavItems } from '../app.nav.modules';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  navItems = NavItems;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  isAuth(): boolean{
    return this.authService.isAuth();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
