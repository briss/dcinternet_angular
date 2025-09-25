function concatenar(a, b, c) {
    return a + b + c;
}


let cadenas = ["Hola", " ", "Mundo!"];


console.log(concatenar(...cadenas));

let cursos = ["JavaScript", "TypeScript", "Angular", "Node", "React", "Vue"];
let [curso1, curso2, ...resto] = cursos;

console.log(curso1);
console.log(curso2);
console.log(resto);

let curso = {
    nombre: "JavaScript",
    duracion: 30,
    imagen: "http://imagen.jpg"
};

let {nombre, duracion, imagen} = curso;

console.log(nombre);
console.log(duracion);
console.log(imagen);

let cursoAvanzado = {
    ...curso,
    nivel: "avanzado"
}

console.log(cursoAvanzado);
