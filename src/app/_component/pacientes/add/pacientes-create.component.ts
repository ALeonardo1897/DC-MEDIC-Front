import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Paciente } from 'src/app/_model/paciente.model';
import { PacienteService } from 'src/app/_service/paciente.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackService } from 'src/app/_service/util/snack.service';

@Component({
  selector: 'app-pacientes-create',
  templateUrl: './pacientes-create.component.html',
  styleUrls: ['./pacientes-create.component.scss']
})
export class PacientesCreateComponent implements OnInit {

  pacienteForm: FormGroup;

  constructor(
    private pacienteService: PacienteService,
    private dialog: MatDialogRef<PacientesCreateComponent>,
    private snack: SnackService,
    @Inject(MAT_DIALOG_DATA) public paciente: Paciente) { }

  ngOnInit(): void {
    
    //Create
    if(!this.paciente){
      this.pacienteForm = new FormGroup({
        'nombres' : new FormControl("",[Validators.required,Validators.minLength(5)]),
        'apellidos' : new FormControl("",[Validators.required,Validators.minLength(5)]),
        'dni' : new FormControl("",[Validators.required,Validators.pattern('[0-9]{8}')]),
        'direccion' : new FormControl("",[Validators.required, Validators.minLength(5)]),
        'email' : new FormControl("",[Validators.required,Validators.email]),
        'telefono' : new FormControl("",[Validators.pattern('[789][0-9]{8}')]),
      })
    }else{
      this.pacienteForm = new FormGroup({
        'nombres' : new FormControl(this.paciente.nombres,[Validators.required,Validators.minLength(5)]),
        'apellidos' : new FormControl(this.paciente.apellidos,[Validators.required,Validators.minLength(5)]),
        'dni' : new FormControl(this.paciente.dni,[Validators.required,Validators.pattern('[0-9]{8}')]),
        'direccion' : new FormControl(this.paciente.direccion,[Validators.required, Validators.minLength(5)]),
        'email' : new FormControl(this.paciente.email,[Validators.required,Validators.email]),
        'telefono' : new FormControl(this.paciente.telefono,[Validators.pattern('[789][0-9]{8}')]),
      })
    }
  }

  insert(paciente: Paciente){
    this.pacienteService.insert(paciente).subscribe( (data:any) => {
      this.dialog.close();
      this.pacienteService.findAll().subscribe( (paciente:Paciente[]) => {
        this.pacienteService.refreshtable.next(paciente);
        this.snack.open("Éxito | Paciente Registrado", "snackbar-base");
      });
    })
  }

  update(paciente: Paciente){

    //Set Paciente ID
    paciente.id = this.paciente.id;

    //
    this.pacienteService.update(paciente).subscribe( (data:any) => {
      console.log(data);
      this.dialog.close();
      this.pacienteService.findAll().subscribe( (paciente:Paciente[]) => {
        this.pacienteService.refreshtable.next(paciente);
        this.snack.open("Éxito | Paciente Actualizado", "snackbar-base");
      });
    });
  }

}
