function buscarCurso() {
  fetch("https://www.dcinternet.com.mx/rino/cursos/301")
    .then(resultado => {
      console.log(resultado);
    })
    .catch(error => {
      console.log(error);
    });
}

buscarCurso();
