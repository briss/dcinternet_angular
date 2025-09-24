function aprenderJavaScript(callback) {
    setTimeout(() => {
        console.log("Estoy aprendiendo JavaScript");
        callback();
    }, 2000);
}

function aprenderTypeScript() {
    console.log("Estoy aprendiendo TypeScript");
}


aprenderJavaScript(aprenderTypeScript);


function hola() {
    console.log("Hola");
}

function hi() {
    console.log("Hi");
}

function holaCallback(callback) {
    console.log("Hola con Callback");
    callback();
}


//aprenderJavaScript();
//aprenderTypeScript();

/*
const miSaludo = function() {
    console.log("Mi saludo");
};
holaCallback(miSaludo);
holaCallback(function() {
    console.log("Mi saludo anónimo");
});

holaCallback(() => {
    console.log("Mi saludo arrow");
});
*/