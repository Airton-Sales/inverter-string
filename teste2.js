const titleInput = document.getElementById("inputId"); 
const button = document.getElementById("buttonId");

function reverterTexto() {
  const String = titleInput.value; 
  const StringInvertida = String.split("").reverse().join("");

  titleInput.value = StringInvertida; 
}

button.addEventListener("click" || "keyup", reverterTexto);
