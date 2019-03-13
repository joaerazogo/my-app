import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from "./cliente.service";
import { Router, ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente()
  private titulo:string = "Create Client"

  constructor(private clienteService: ClienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente()
  }

  public create(): void{
    this.clienteService.create(this.cliente).subscribe(
      json => {
        this.router.navigate(['/clientes'])
        Swal.fire('Nuevo Cliente',`${json.mensaje}: ${json.cliente.nombre}`, 'success')
      }
    )
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params=> {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente )
      }
    })
  }

  update(): void{
    this.clienteService.update(this.cliente)
      .subscribe(json=>{
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente Actualizado',`${json.mensaje}: ${json.cliente.nombre}`, 'success')
      })
  }

}
