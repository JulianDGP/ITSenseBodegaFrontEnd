import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  productos:Producto[] =[];
  roles!: string[];
  isAdmin = false;
constructor(private productoService: ProductoService,  private toastr: ToastrService,
  private tokenService: TokenService){
}

  ngOnInit() {
      this.cargarProductos();
      this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarProductos():void{
    this.productoService.listar().subscribe(
      data =>{
        this.productos = data;
      },
      err =>{
        console.log(err)
      } 

    )
  }

  cargarProductosStock():void{
    this.productoService.stock(true).subscribe(
      data =>{
        this.productos = data;
      },
      err =>{
        console.log(err)
      } 

    )
  }

  cargarProductosSinStock():void{
    this.productoService.stock(false).subscribe(
      data =>{
        this.productos = data;
      },
      err =>{
        console.log(err)
      } 

    )
  }

  borrar(id?:Number) {
    this.productoService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );

}
}