import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../_model/paciente.model';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  refreshtable = new Subject<Paciente[]>();
  url:string = environment.BACKEND_IP + "/pacientes/";
  
  
  constructor(private http: HttpClient) { }

  findAll(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url);
  }

  findById(){

  }

  insert(paciente: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(this.url, paciente, httpOptions );
  }

  update(paciente: Paciente): Observable<Paciente>{
    return this.http.put<Paciente>(this.url + paciente.id + "/", paciente, httpOptions );
  }

}
