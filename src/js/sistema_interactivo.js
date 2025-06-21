function enviarFormulario() { 

    // Get the values of the 'age' and 'name' fields from the form.
    const edad = document.getElementById('edad').value;
    const nombre = document.getElementById('nombre').value;

    // Variable to store the response message.
    let messaje;

    // Check if the entered age is not a number and  nombre.
    if (isNaN(edad)) {
        // If 'edad' is not a number error message.
        messaje = "Error: Por favor, ingresa una edad válida en números y un nombre es texto.";
    }
    
    // Check if the age is 18 or older.
    else if (edad >= 18) {
        // If the age is 18 or older, send a message for adults.
        messaje = "hola " + nombre + ", eres mayor de edad. ¡Preparate para grandes opórtunidades en el mundo de la programacion!";
    } 
    // If the age is younger than 18.
    else {
        // If the age is less than 18, send a message for minors.
        messaje = "hola " + nombre + ",eres menor de edad. ¡No te preocupes, la programacion es para todos! Sigue aprendiendo y creciendo.";
    }

    // Display the resulting message in the element with id 'resultado'.
    document.getElementById("resultado").innerHTML = messaje;
}
