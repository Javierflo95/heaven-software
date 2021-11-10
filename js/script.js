var boton = document.getElementById('enviar')

function eventoClick() {
  console.log('Click just happened')
}

if(boton){
  boton.addEventListener('submit', eventoClick, false);
}