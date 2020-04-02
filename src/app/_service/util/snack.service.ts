import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snack: MatSnackBar) { }

  open(msg: string, css_class: string){
    this.snack.open( msg , null, {
      duration: 2500,
      panelClass: [ css_class ]
    });
  }

}
