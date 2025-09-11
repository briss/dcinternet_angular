function FabricaDecoradores(mensaje:string) {
    function Bitacora(target:Function) {
        console.log('Bitácora');
        console.log(mensaje);
        console.log(target);
    }

    return Bitacora;
}



@FabricaDecoradores('Mensaje desde Alumno')
class Alumno {
  nombre:string;
  correo:string;
  imagen:string;

  constructor(nombre:string, correo:string, imagen:string) {
    this.nombre = nombre;
    this.correo = correo;
    this.imagen = imagen;
  }
}

//const alumno:Alumno = new Alumno('Briseidas', 'briseidags', 'https://randomuser.me/api/portraits/women/2.jpg');
//console.log(alumno.nombre);


class Empresa {

    constructor(private nombre:string) {
    }

    getNombre() {
        console.log(this.nombre);
    }
}

const empresa:Empresa = new Empresa('Mi Empresa');
empresa.getNombre();
