interface Persona {
    nombre:string;
    apellido:string;
    apellidoMaterno?:string;

    hablar():string;
}

interface Contribuyente {
    rfc:string;

    pagarImpuestos():number;
}

class Cliente implements Persona, Contribuyente {
    nombre: string;
    apellido: string;
    rfc: string;

    constructor(nombre:string, apellido:string, rfc:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rfc = rfc;
    }

    pagarImpuestos(): number {
        return 0;
    }

    hablar(): string {
        return 'Hola';
    }
}

let cliente:Cliente = new Cliente('Briseida', 'Galván', 'RFC');
console.log('Pagar: ' + cliente.pagarImpuestos());

class Compania implements Contribuyente {
    rfc: string;

    constructor(rfc:string) {
        this.rfc = rfc;
    }

    pagarImpuestos(): number {
        return 1000;
    }
}




type TipoPersona = {
    nombre:string;
    apellido:string;
    apellidoMaterno?:string;

    hablar():string;
}

class TipoAlumno implements TipoPersona {
    nombre:string;
    apellido:string;
    apellidoMaterno?:string;

    constructor(nombre:string, apellido:string, apellidoMaterno?:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.apellidoMaterno = apellidoMaterno ?? 'Sin apellido Materno';
    }

    hablar(): string {
        return ` Hola, soy ${this.nombre} ${this.apellido} ${this.apellidoMaterno} ` ;
    }
}

let alumno:TipoAlumno = new TipoAlumno('Briseida', 'Galván');
console.log(alumno.hablar());

let alumno2:TipoPersona = new TipoAlumno('Briseida', 'Galván', 'Suárez');
console.log(alumno2.hablar());
