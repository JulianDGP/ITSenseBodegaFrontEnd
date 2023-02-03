export class Producto {
    id?: Number;
    nombre?:String;
    cantidad: number;
    defectos?: Boolean;
    disponibilidadStock?: Boolean;
    elaboracion?: String;
    fechaIngreso?: Date;
    fechaRetiro?:Date;

    constructor(nombre:String, cantidad:number, defectos: Boolean, disponibilidadStock: Boolean, elaboracion: String, fechaIngreso: Date, fechaRetiro:Date){
        this.nombre= nombre;
        this.cantidad = cantidad;
        this.defectos = defectos;
        this.disponibilidadStock= disponibilidadStock;
        this.elaboracion = elaboracion;
        this.fechaIngreso = fechaIngreso;
        this.fechaRetiro=fechaRetiro;
    
    }
}

