
function enviarFormulario(){ 

const edad = document.getElementById('edad').value
const nombre = document.getElementById('nombre').value
if (isNaN(edad)) {
    console.error("Error: Por favor ,  ingresa una edad valida en numeros.");
} else if (edad >= 18) {
    alert("Hola " + nombre + ", eres mayor de edad. ¡Preparate para grandes opórtunidades en el mundo de la programacion!");

}else {
    alert("Hola " + nombre + ", eres menor de edad. ¡No te preocupes, la programacion es para todos! Sigue aprendiendo y creciendo.");
}


        
} 