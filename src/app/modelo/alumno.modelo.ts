export class Alumno {
  nombre:string;
  correo:string;
  imagen:string;

  constructor(nombre:string, correo:string, imagen:string) {
    this.nombre = nombre;
    this.correo = correo;
    this.imagen = imagen;
  }
}