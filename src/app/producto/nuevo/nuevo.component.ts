import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  nombre ='';
  cantidad=0;
  defectos= false;
  disponibilidadStock=false;
  elaboracion='';
  fechaIngreso!: Date;
  fechaRetiro!:Date;

  productoAMano: string= "Elaborado a mano";
  productoAMaquina: string= "Elaborado a maquina";

  constructor(private productoService: ProductoService, private toastr: ToastrService, private router: Router){

}
  ngOnInit() {

  }

  onCreate():void{
    if (this.cantidad>0 ){
      this.disponibilidadStock=true;
    }
    const producto = new Producto(this.nombre, this.cantidad, this.defectos, this.disponibilidadStock, this.elaboracion, this.fechaIngreso, this.fechaRetiro);
    this.productoService.guardar(producto).subscribe(
      
      data =>{
          this.toastr.success("Producto creado","OK", {timeOut: 3000});
          this.router.navigate(['/']);         
      },
      err =>{
        this.toastr.error(err.err.mensaje,"Fail", {timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['/']);
      }
    );
  }
}
