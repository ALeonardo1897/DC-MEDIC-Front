import { Component, OnInit } from '@angular/core';
import { NavItems } from '../app.nav.modules';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  navItems = NavItems;

  constructor() { }

  ngOnInit(): void {
  }

}
