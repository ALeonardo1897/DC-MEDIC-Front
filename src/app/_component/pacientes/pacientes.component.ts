import { Component, OnInit, ViewChild } from '@angular/core';
import { PacienteService } from 'src/app/_service/paciente.service';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/app/_model/paciente.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PacientesCreateComponent } from './add/pacientes-create.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  dataSource: MatTableDataSource<Paciente>;
  displayedColumns: string[] = ['nombres', 'apellidos', 'dni', 'telefono', 'direccion', 'email','action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private pacienteService: PacienteService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll();

    //React to Subject - Refresh data
    this.pacienteService.refreshtable.subscribe( (pacientes:Paciente[]) => {
      this.dataSource = new MatTableDataSource(pacientes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  findAll(){
    this.pacienteService.findAll().subscribe( (data:Paciente[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog(){
    this.dialog.open(PacientesCreateComponent);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  update(paciente: Paciente){
    console.log(paciente);
    this.dialog.open(PacientesCreateComponent, {data: paciente});
  }

  deleteById(id: number){
    console.log(id);
  }

}
