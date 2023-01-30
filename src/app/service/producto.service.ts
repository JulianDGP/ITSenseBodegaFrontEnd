import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL= "http://localhost:8080/api/producto/";
  constructor(private httpClient: HttpClient) { 
  }
  public listar():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productoURL + 'listar')
  }

  public detalle(id: Number):Observable<Producto>{
    return this.httpClient.get<Producto>(this.productoURL + `detalle/${id}`)
  }

  public stock(disponibilidadStock: Boolean):Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productoURL + `stock/${disponibilidadStock}`)
  }

  public guardar(producto:Producto):Observable<any>{
    return this.httpClient.post<any>(this.productoURL+ 'crear', producto)
  } 
  public update(id:Number, producto:Producto):Observable<any>{
    return this.httpClient.put<any>(this.productoURL+ `update/${id}`, producto)
  } 

public delete(id?: Number): Observable<any>{
  return this.httpClient.delete<any>(this.productoURL+ `borrar/${id}`)
}

}
