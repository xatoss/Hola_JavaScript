/* //////////////////////// CREAR TAREA  ///////////////////////*/
document.getElementById("btn-agregar").addEventListener("click", agregarTarea);
function agregarTarea() {
  const input = document.getElementById("tareaInput");
  const textoTarea = input.value.trim();
  
  if (textoTarea !== "") {
    
    const lista = document.getElementById("lista");

    // Crear el elemento de la tarea
    const item = document.createElement("li");
    item.className = "list-group-item d-flex justify-content-between align-items-center";

    // Texto de la tarea
    item.innerHTML = `
      <span>${textoTarea}</span>
      <button class="btn btn-danger btn-sm" onclick="borrarTarea(this)">Borrar</button>
    `;

    // Agregar al DOM
    lista.appendChild(item);

    // Limpiar input
    input.value = "";
  alerta()
} else {

  alertaVacia();

} 
}; 


// Función para borrar una tarea
function borrarTarea(boton) {
  
  const borrar = boton.parentElement;
  borrar.remove();
  const alertaBorra = document.getElementById("alertaBorra");
  alertaBorra.classList.remove("d-none");
    setTimeout(() => {
      alertaBorra.classList.add("d-none");
    }, 2000)
  
  }
function alerta() {
  const alerta = document.getElementById("alerta");
  alerta.classList.remove("d-none");
  setTimeout(() => {
    alerta.classList.add("d-none");
  }, 2000)
}
function alertaVacia() {
  const alertaBuida = document.getElementById("alertaBuida");
  alertaBuida.classList.remove("d-none");
  // Ocultar la alerta automáticamente después de 2 segundos
  setTimeout(() => {
    alertaBuida.classList.add("d-none");
  }, 2000)
}







/* ////////////////////////MODAL ///////////////////////*/
let btnMod1 = document.getElementById("btn-modal1"); //Boton modal 1
btnMod1.addEventListener("click", modal1); //Evento click modal 1

function modal1() { //Modal 1
  document.getElementById("modal-title").innerHTML = "Este es el modal 1";
  document.getElementById("modal-body").innerHTML = "Este es el modal 1";
  
};
////////////////////////////////////////////////////
let btnMod2 = document.getElementById("btn-modal2"); //Boton modal 2
btnMod2.addEventListener("click", modal2); //Evento click modal 2 

function modal2() { //Modal 2
  document.getElementById("modal-title").innerHTML = "Este es el modal 2";
  document.getElementById("modal-body").innerHTML = "Este es el modal 2";
 
}; 
///////////////////////////////////////////////////////
let btnMod3 = document.getElementById("btn-modal3"); //Boton modal 3
btnMod2.addEventListener("click", modal3); //Evento click modal 3 

function modal3() { //Modal 3
  document.getElementById("modal-title").innerHTML = "Este es el modal 3";
  document.getElementById("modal-body").innerHTML = "Este es el modal 3";
 
}; 

/* ////////////////////////FORMULARI ///////////////////////*/

const form = document.getElementById("form");
const alertSuccess = document.getElementById("alertSuccess");
    
 form.addEventListener("input", (event) => {
    const field = event.target;
  if (field.checkValidity()) {
    field.classList.add("is-valid");
    field.classList.remove("is-invalid");
  } else {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
  }
});
form.addEventListener("submit", function(event) {
  event.preventDefault();
  event.stopPropagation();

  if (form.checkValidity()) {
    alertSuccess.classList.remove("d-none");
    form.reset();
    form.classList.remove("was-validated");
    setTimeout(() => {
      alertSuccess.classList.add("d-none");
    }, 2000); 
  } else {
    alertSuccess.classList.add("d-none");
  }
  
});

