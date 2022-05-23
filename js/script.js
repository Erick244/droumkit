function criarTecla(src, id, tecla) {
    const novaTecla = document.createElement('div');
    novaTecla.classList.add('tecla');

    const audio = document.createElement('audio');
    audio.id = id;
    audio.src = src;
    novaTecla.appendChild(audio);

    const p = document.createElement('p');
    p.innerHTML = tecla.toUpperCase();
    novaTecla.appendChild(p);

    return novaTecla;
}

function ativarTecla(audio) {
    audio.currentTime = 0;
    audio.play();
}

function startDroumkit(teclas, srcs, droumkit, volume) {
    teclas.forEach((t, i) => {
        const newTecla = criarTecla(srcs[i], i, t);
        droumkit.appendChild(newTecla);

        const audioAtual = document.getElementById(i);

        audioAtual.volume = volume;

        newTecla.onclick = () => {
            ativarTecla(audioAtual);
        }

        addEventListener('keypress', (e) => {
            if (e.key == t) {
                ativarTecla(audioAtual);
            }
        })
    })
}


const droumkit = document.querySelector('[droumkit]')

const teclas = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'];
const src = [
    'sounds/boom.wav',
    'sounds/clap.wav',
    'sounds/hihat.wav',
    'sounds/kick.wav',
    'sounds/openhat.wav',
    'sounds/ride.wav',
    'sounds/snare.wav',
    'sounds/tink.wav',
    'sounds/tom.wav'
];

startDroumkit(teclas, src, droumkit, 0.5);








