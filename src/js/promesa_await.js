function aprenderJavaScript() {
    return new Promise((resuelve, rechaza) => {
        setTimeout(() => {
            let aprendido = true;
            aprendido ? resuelve("He aprendido JavaScript") : rechaza("No se aprendió JavaScript");
        }, 1000);
    });
}

function aprenderTypeScript() {
    return new Promise((resuelve, rechaza) => {
        setTimeout(() => {
            let aprendido = false;
            aprendido ? resuelve("He aprendido TypeScript") : rechaza("No se aprendió TypeScript");
        }, 1000);
    });
}

function aprenderAngular() {
    return new Promise((resuelve, rechaza) => {
        setTimeout(() => {
            let aprendido = true;
            aprendido ? resuelve("He aprendido Angular") : rechaza("No se aprendió Angular");
        }, 1000);
    });
}

/*
aprenderJavaScript()
    .then(mensaje => {
        console.log(mensaje);
        return aprenderTypeScript();
    })
    .then(mensaje => {
        console.log(mensaje);
        return aprenderAngular();
    })
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(error => {
        console.log(error);
    });
*/

async function aprenderTodo() {
    try {
        let mensaje = await aprenderJavaScript();
        console.log(mensaje);

        mensaje = await aprenderTypeScript();
        console.log(mensaje);

        mensaje = await aprenderAngular();
        console.log(mensaje);
    } catch(error) {
        console.log(error);
    }
}

aprenderTodo();