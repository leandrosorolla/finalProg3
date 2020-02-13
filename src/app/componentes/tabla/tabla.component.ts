import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataApiService } from './../../service/data-api.service';
import { Persona } from './../../entidad/persona';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tablaForm',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;
  personas: Persona [] = [];
  persona: Persona = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: 0,
  };
  public formGroup: FormGroup;

  // tslint:disable-next-line: max-line-length
  constructor(private servicio: DataApiService, private router: Router, private rutaActiva: ActivatedRoute, private formBuilder: FormBuilder ) {}



    public ngOnInit() {
      this.getAll();
      this.buildForm();
    }
    public buildForm() {
      this.formGroup = this.formBuilder.group({
        id: this.persona.id,
        nombre: this.persona.nombre,
        apellido: this.persona.apellido,
        dni: this.persona.dni,
      });
    }


  getAll() {
    this.servicio.getAll().subscribe(data => {
      this.personas = data;
      console.log(this.personas);
    });
  }

  delete(id: number, cont: number) {
    const opcion = confirm('¿Está seguro que deseas confirmar el evento?');
    if (opcion === true) {
      this.servicio.delete(id).subscribe(data => {
        console.log(data);
        alert('Registro Eliminado');
        this.buildForm();
        this.personas.splice(cont, 1);
         // .reload();
      //  this.refresh();
      });
    }
  }
  // Agregar
  agregar(persona: Persona) {
    console.log(persona);
    this.servicio.post(persona).subscribe(data => {
      this.persona = data;
      console.log(data);
      this.personas.push(this.persona);
    });

  }
  // ACTUALIZAR
actualizar(persona: Persona) {
  this.persona = persona;
  this.buildForm();
}
add() {
 let persona: Persona = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: 0,
  };
 this.persona = persona;
 this.buildForm();
}
  update(persona: Persona) {
    const idPersona = persona.id;
    this.servicio.put(idPersona, persona).subscribe(data => {
      this.persona = data;
      const id = this.persona.id;
      const nombre = this.persona.nombre;
      const apellido = this.persona.apellido;
      const dni = this.persona.dni;
      this.personas.map(function(dato){
        if (dato.id === id){
          dato.nombre=nombre;
          dato.apellido=apellido;
          dato.dni=dni;

        }
      });

    });

  }

  save(formGroup: FormGroup, cont: number) {

      if (formGroup.value.id === 0) {
        this.agregar(formGroup.value);
      } else {
        this.update(formGroup.value);

      }
      formGroup.reset();
      this.btnClose.nativeElement.click();
  }


}
