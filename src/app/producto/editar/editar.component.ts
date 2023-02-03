import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  productoAMano: string= "Elaborado a mano";
  productoAMaquina: string= "Elaborado a maquina";
  producto!: Producto;
  cantidadBandera?: number;

  constructor(private productoService: ProductoService,
     private activatedRoute: ActivatedRoute,
     private toastr: ToastrService,
     private router: Router){
    
  }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.detalle(id).subscribe(
    data =>{
    this.producto = data;
    this.cantidadBandera = this.producto.cantidad;
    
    console.log(typeof(this.cantidadBandera))
    console.log(typeof(this.producto.cantidad));
  },
  err =>{
    this.toastr.error(err.error.mensaje, 'Fail',{
      timeOut:3000, positionClass:'toast-top-center',

    });
    this.router.navigate(['/']);
  }
)   
  }


  onUpdate():void{
      this.producto.cantidad -= Number(this.cantidadBandera);
      if(this.producto.cantidad >=1){
          this.producto.disponibilidadStock=true;
          const id = this.activatedRoute.snapshot.params['id'];
          this.productoService.update(id, this.producto).subscribe(
          data =>{
          this.toastr.success("Producto Actualizado","OK", {timeOut: 3000, positionClass: 'toast-top-center'});
          this.router.navigate(['/']);         
    },
    err =>{
      this.toastr.error(err.err.mensaje,"Fail", {timeOut: 3000, positionClass: 'toast-top-center'});
      this.router.navigate(['/']);
    }
    );
      }else if(this.producto.cantidad ==0){
        this.producto.disponibilidadStock=false;
        const id = this.activatedRoute.snapshot.params['id'];
        this.productoService.update(id, this.producto).subscribe(
        data =>{
        this.toastr.success("Producto Actualizado","OK", {timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['/']);         
  },
  err =>{
    this.toastr.error(err.err.mensaje,"Fail", {timeOut: 3000, positionClass: 'toast-top-center'});
    this.router.navigate(['/']);
  }
  );
      }else{
        this.toastr.error("Esta intentando retirar mas productos de los que hay");
      }
      
      
    }
  }

