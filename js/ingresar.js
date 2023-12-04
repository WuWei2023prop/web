function validarFormulario(){
    var email = document.getElementById('email')
    var contraseña = document.getElementById('contraseña')
    if (!email) {
        alert("El campo de correo electrónico no puede estar vacío.");
        return false;
    }
    var regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!regexContraseña.test(contraseña)) {
        alert('La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.');
        return false;
    }
}

function validarYEnviarFormulario() {
    // Llamamos a la función de validación
    if (validarFormulario()) {
        // Si la validación pasa, enviamos el formulario
        document.getElementById("formulario").submit();
    }
}