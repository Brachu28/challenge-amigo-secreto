let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    
    if (!nombre) {
        alert('Escribe un nombre');
        return;
    }
    
    amigos.push(nombre);
    input.value = '';
    document.getElementById('listaAmigos').innerHTML = 
        amigos.map(nombre => `<li>${nombre}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega amigos primero');
        return;
    }
    
    let ganador = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = 
        `<li>¡Amigo secreto: ${ganador}!</li>`;

    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';

    setTimeout(() => {
        let reiniciar = confirm('¿Volver a jugar?');
        
        if (reiniciar) {
            amigos = [];
            document.getElementById('listaAmigos').innerHTML = '';
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('amigo').value = '';
        } else {
            alert('Gracias por jugar');
            amigos = [];
            document.getElementById('listaAmigos').innerHTML = '';
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('amigo').value = '';
        }
    }, 500);
    
}
