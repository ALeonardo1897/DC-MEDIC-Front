import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_component/auth/login/login.component';
import { MainComponent } from './_component/main.component';
import { PacientesComponent } from './_component/pacientes/pacientes.component';


const routes: Routes = [
  { path: 'pacientes', component: PacientesComponent},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
