
let promesa = new Promise((resuelve, rechaza) => {
    new Date().getDay() == 5 ? resuelve("Hoy si hay clase") : rechaza("Hoy no hay clase")
});

promesa
    .then((valor) => console.log(valor))
    .catch((error) => console.log(error));

    