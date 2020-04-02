import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MainComponent } from './_component/main.component';
import { LoginComponent } from './_component/auth/login/login.component';
import { PacientesComponent } from './_component/pacientes/pacientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { PacientesCreateComponent } from './_component/pacientes/add/pacientes-create.component';


const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: () => {return localStorage.getItem("ACCESS_TOKEN")},
      whitelistedDomains: ["127.0.0.1:8000"]
  }
};


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    PacientesComponent,
    PacientesCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
