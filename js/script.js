var formulario = document.getElementById("email-formulario");

formulario.addEventListener("submit", function (e) {
  var desea_enviar_correo = confirm("Deseas enviar el correo");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  if (!desea_enviar_correo) {
    e.preventDefault();
  }
  else {
    alert("Enviando correo de -> " + name + "\n "+ email + " con el siguiente mensaje \n ____ \n  " + mensaje);
    alert("Mensaje enviado exitosamente.");
    e.preventDefault();
    window.open("mailto:contacto@heavensoftware.com.co?subject="+ name + "&body=" + mensaje);
  }
});
