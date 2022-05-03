/*
credenciales verificadas de un usuario
     -usuario registrado
     -contraseña registrado


credenciales ingresadas por algun usuario
    -usuario
    -contraseña

requisitos
   -verificar si las credenciales usadas son validas
   -mostrar resultado visual para el usuario

   */

const USUARIO_REGISTRADO = "Fernando";
const CONTRASEÑA_REGISTRADA = "Zalazar";

let usuarioIngresado = "usuario por defecto";
let contraseñaIngresada = "contraseña por defecto";
/*
-verifica el login-
*/

function verificar(){


usuarioIngresado = document.querySelector('usuario_ingresado').value;
console.log(usuarioIngresado);

}
