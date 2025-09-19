function saluda(mensaje) {
    return "Hola Mundo! " + mensaje;
}
console.log(saluda("Me"));


let saludo = (mensaje) => "Hola Mundo! " + mensaje;
console.log(saludo);
console.log(saludo("Me"));

console.log(((mensaje) => "Hola Mundo! " + mensaje)("Me"));


const cuadrado = op1 => op1 * op1;
console.log(cuadrado(5));
console.log((op1 => op1 * op1));
