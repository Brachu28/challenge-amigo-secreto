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
    
    // Actualizar lista
    document.getElementById('listaAmigos').innerHTML = 
        amigos.map(nombre => `<li>${nombre}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega amigos primero');
        return;
    }
    
    const ganador = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = 
        `<li>¡Amigo secreto: ${ganador}!</li>`;
}
