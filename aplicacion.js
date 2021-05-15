const push = (number) => {
  let valorPiso = document.getElementById("piso").value;
  if (valorPiso == "Piso") {
    valorPiso = number;
  } else if (valorPiso.length < 2) {
    valorPiso += number;
    document.getElementById("piso").style.border = "solid white";
    document.getElementById("depto").style.border = "solid green";
  } else {
    pushDepto(number);
  }
  document.getElementById("piso").value = valorPiso;
};

const pushDepto = (number) => {
  const valorDepto = document.getElementById("depto").value;
  if (valorDepto == "Depto") {
    document.getElementById("depto").value = number;
  } else {
    document.getElementById("visor").value =
      "Por favor, no ingresar más números";
  }
};

const call = () => {
  const piso = document.getElementById("piso").value;
  const depto = document.getElementById("depto").value;
  let color = "red";
  let respuesta = "None";
  if (piso.length > 2) {
    respuesta = "Debe ingresar un número de piso";
  } else if (piso.length < 2) {
    respuesta = "Debe ingresar un piso de dos dígitos";
  } else if (depto.length > 1) {
    respuesta = "Debe ingresar un número de departamento";
  } else if (piso > 42) {
    respuesta = "El piso debe ser estar entre 00 y 42";
  } else if (depto == 0 || depto > 8) {
    respuesta = "El departamento debe estar entre 1 y 8";
  } else {
    respuesta = `Llamando al piso ${piso} departamento ${depto}`;
    color = "green";
  }
  document.getElementById("call").style.background = color;
  document.getElementById("visor").value = respuesta;
  setTimeout(function () {
    borrar();
  }, 2500);
};

// const responder = () => {
//   let mensaje;
//   const number = random(1, 4);
//   switch (number) {
//     case "1":
//       mensaje = "Comunicación establecida";
//       break;
//     case "2":
//       mensaje = "Ocupado. Intente más tarde";
//       break;
//     case "3":
//       mensaje = "El horario de atención es de 9hs a 18 hs";
//       break;
//     case "4":
//       mensaje = "Servicio no disponible";
//       break;
//     default:
//       mensaje = "Ha ocurrido un error";
//   }
//   document.getElementById("visor").value = mensaje;
// };

const borrar = () => {
  document.getElementById("piso").value = "Piso";
  document.getElementById("depto").value = "Depto";
  document.getElementById("piso").style = null;
  document.getElementById("depto").style = null;
  document.getElementById("visor").value =
    "Bienvenido/a. Ingrese un número de piso";
  document.getElementById("call").style.background = null;
};
