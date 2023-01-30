import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  productos:Producto[] =[];
constructor(private productoService: ProductoService){
}

  ngOnInit() {
      this.cargarProductos();
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

  borrar(id: number){
    alert("borrar")
  }

}
