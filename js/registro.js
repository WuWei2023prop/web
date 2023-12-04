function validarFormulario() {
    // Obtener el valor del campo de nombre
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById('contraseña').value;
    var confirmarContraseña = document.getElementById('confirmarContraseña').value;
    var telefono = document.getElementById('telefono').value;

    // Expresión regular para permitir solo letras
    var regexSoloLetras = /^[A-Za-z]+$/;

    // Expresión regular para verificar si el campo de teléfono contiene solo números
    var regexTelefono = /^[0-9]+$/;

    // Verificar si los campos de nombre y apellido están vacíos o contienen menos de 2 letras
    if (nombre.trim() === "" || nombre.length < 2 || apellido.trim() === "" || apellido.length < 2) {
        alert("Los campos de nombre y apellido no pueden estar vacíos y deben tener al menos 2 letras.");
        return false;
    }

    // Verificar si los campos de nombre y apellido contienen solo letras
    if (!regexSoloLetras.test(nombre) || !regexSoloLetras.test(apellido)) {
        alert("Los campos de nombre y apellido solo deben contener letras.");
        return false;
    }

    // Convertir la fecha a un objeto Date
    var fechaNacimiento = new Date(fecha);
    // Obtener el año de la fecha
    var añoNacimiento = fechaNacimiento.getFullYear();
    // Verificar si el año de nacimiento es mayor que 2005
    if (añoNacimiento > 2005) {
        alert("Debes tener más de 18 años");
        return false;
    }

    // Verificar si el campo de correo electrónico está vacío
    if (!email) {
        alert("El campo de correo electrónico no puede estar vacío.");
        return false;
    }

    // El navegador se encarga de validar si el email es válido automáticamente

    // Verificar si las contraseñas son iguales
    if (contraseña !== confirmarContraseña) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    // Verificar la complejidad de la contraseña (mayúsculas, minúsculas, números)
    var regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!regexContraseña.test(contraseña)) {
        alert('La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.');
        return false;
    }

    // Verificar si el campo de teléfono contiene solo números
    if (!regexTelefono.test(telefono)) {
        alert('El campo de teléfono debe contener solo números.');
        return false;
    }

    // Si todas las validaciones pasan, el formulario se enviará
    return true;
}

function validarYEnviarFormulario() {
    // Llamamos a la función de validación
    if (validarFormulario()) {
        // Si la validación pasa, enviamos el formulario
        document.getElementById("formulario").submit();
    }
}

