function buscarCurso() {
  fetch("https://www.dcinternet.com.mx/rino/cursos/301")
    .then(resultado => {
      //console.log(resultado);
      return resultado.json();
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
}

buscarCurso();
