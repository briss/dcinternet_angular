let cursos = [
  {
    id: 1,
    nombre: "JSE",
    categoria: "Lenguajes de Programacion",
    duracion: 30,
    descripcion: "Conoce sobre threads, excepciones, interfaces, genéricos, JDBC, POO y más. ",
    imagen: "https://www.dcinternet.com.mx/images/DCInternet Cursos Java desde Cero.png",
  },
  {
    id: 2,
    nombre: "JavaScript",
    categoria: "Web",
    duracion: 30,
    descripcion: "Aprende arrrow functions, promises, call back functions, const, let , ajax",
    imagen: "http://www.dcinternet.com.mx/images/DCInternetJavaScript.jpg",
  },
  {
    id: 3,
    nombre: "Angular",
    categoria: "Web",
    duracion: 30,
    descripcion: "Aprende arrrow functions, promises, call back functions, const, let , ajax",
    imagen: "https://www.dcinternet.com.mx/images/Curso-Angular.png",
  },
  {
    id: 4,
    nombre: "SQL Server DBA",
    categoria: "Bases de Datos",
    duracion: 32,
    descripcion: "Aprende arquitectuta de BD, respaldos completos y del log, point in time recovery, auditoria, bulk copy, jobs y más",
    imagen: "https://www.dcinternet.com.mx/images/SQL Server DBA.png",
  },
  {
    id: 5,
    nombre: "React",
    categoria: "Desarrollo Web",
    duracion: 30,
    descripcion: "Aprende a crear componentes de React usando JSX, props, hooks como useState, useContext y otros para desarrollo Web",
    imagen: "https://www.dcinternet.com.mx/images/Curso React DCInternet.png",
  },
  {
    id: 6,
    nombre: "MicroServicios con Spring Boot",
    categoria: "Devops",
    duracion: 32,
    descripcion: "Aprende a crear microservicios con Spring Boot implementando los Patrones de Diseño como Service Discover, Load Balancing, tracing, circuit break, etc.",
    imagen: "https://www.dcinternet.com.mx/images/Curso Microservicios Spring Boot.png",
  },
];


function insertaCurso(curso) {
  return new Promise((resuelve, rechaza) => {
    setTimeout(() => {
      // cursos.push(curso);
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
      cursos = [...cursos, curso]; // Tiene el mismo efecto que el push

      let error = false;

      !error ? resuelve(curso) : rechaza("Hubo un error al insertar");
    }, 2000);
  });
}


function leerCursos() {
  setTimeout(() => {
    let output = "";
    cursos.forEach((curso) => {
      output += "<li>" + curso.nombre + "</li>";
    });
    document.getElementById("resultado").innerHTML = output;
  }, 1000)
}


insertaCurso({
  id: 7,
  nombre: "Linux",
  categoria: "SO",
  duracion: 32,
  descripcion: "Aprende a crear microservicios con Spring Boot implementando los Patrones de Diseño como Service Discover, Load Balancing, tracing, circuit break, etc.",
  imagen: "https://www.dcinternet.com.mx/images/Curso Microservicios Spring Boot.png",
})
  .then(leerCursos)
  .catch(error => console.log(error));

leerCursos();
