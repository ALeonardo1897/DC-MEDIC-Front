import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';  
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MaterialModule { }
