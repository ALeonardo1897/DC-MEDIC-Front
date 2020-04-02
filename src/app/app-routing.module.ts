import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_component/auth/login/login.component';
import { PacientesComponent } from './_component/pacientes/pacientes.component';
import { AuthGuard } from './_service/guard/auth.guard';


const routes: Routes = [
  { path: 'pacientes', component: PacientesComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
