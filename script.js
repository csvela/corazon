const fechaInicio = new Date(2025, 9, 17, 18, 30, 0); 
const mensaje = "Para la persona que amo:\nSi pudiera elegir un lugar seguro,sería a tu lado.\nTe amo.❤️";

window.addEventListener('DOMContentLoaded', () => {
    actualizarContador();
    setInterval(actualizarContador, 1000);
    setInterval(crearCorazonFondo, 600);
    
    // El tronco tarda 2s en crecer, luego los corazones
    setTimeout(formarCopaArbol, 2000);
    
    // El texto empieza un poco después
    setTimeout(escribirTexto, 3000);
});

function actualizarContador() {
    const ahora = new Date();
    const dif = ahora - fechaInicio;
    const d = Math.floor(dif / (1000 * 60 * 60 * 24));
    const h = Math.floor((dif / (1000 * 60 * 60)) % 24);
    const m = Math.floor((dif / 1000 / 60) % 60);
    const s = Math.floor((dif / 1000) % 60);
    document.getElementById('timer').innerText = `${d} días, ${h} horas, ${m} min y ${s} seg`;
}

function escribirTexto() {
    let i = 0;
    const el = document.getElementById('typing-text');
    const interval = setInterval(() => {
        if (i < mensaje.length) {
            el.innerHTML += (mensaje[i] === "\n") ? "<br>" : mensaje[i];
            i++;
        } else {
            clearInterval(interval);
            el.style.borderRight = "none";
        }
    }, 90);
}

function formarCopaArbol() {
    const tree = document.getElementById('tree');
    // Coordenadas fijas para que los corazones no se muevan
    const puntos = [
        {x: 50, y: 10}, {x: 35, y: 15}, {x: 65, y: 15},
        {x: 25, y: 30}, {x: 50, y: 30}, {x: 75, y: 30},
        {x: 20, y: 50}, {x: 45, y: 50}, {x: 70, y: 50},
        {x: 35, y: 65}, {x: 60, y: 65}, {x: 50, y: 45}
    ];
    
    puntos.forEach((p, i) => {
        setTimeout(() => {
            const h = document.createElement('div');
            h.className = 'tree-heart';
            h.innerHTML = "❤️";
            h.style.left = p.x + "%";
            h.style.top = p.y + "%";
            h.style.fontSize = "24px";
            tree.appendChild(h);
        }, i * 200);
    });
}

function crearCorazonFondo() {
    const h = document.createElement('div');
    h.className = 'heart-particle';
    h.innerHTML = "💗";
    h.style.left = Math.random() * 100 + "vw";
    const dur = Math.random() * 3 + 5;
    h.style.animationDuration = dur + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), dur * 1000);
}