const usuario = document.getElementById("Title");
let login = "";
let contador = +localStorage.getItem("contador") || 0;
const miUsuario = document.querySelector(".login");

usuario.addEventListener("click", identificarUsuario);

function identificarUsuario() {
  let nombre = prompt("Ingrese su nombre para identificarse");
  let usuarioNuevo = (login += nombre);

  if (usuarioNuevo) {
    localStorage.setItem("nombre", usuarioNuevo);
  }
}

function obtenerUsuario() {
  let usuarioLogueado = localStorage.getItem("nombre");

  miUsuario.innerHTML = `${usuarioLogueado}`;

  console.log(usuarioLogueado);
}

obtenerUsuario();

function contadorVisitas() {
  contador = contador + 1;
  if (contador) {
    localStorage.setItem("contador", contador);
  }
}

contadorVisitas();

