function Simulation(){

//inicio los datos a recibir

const Name = prompt("Ingrese su nombre");
const rol = prompt("Cual es su rol? (Tanque, Daño, Especialista)");
let levels = prompt("Cuantos niveles quiere subir?");

//n random para las estadisticas
function RandomStat() {
    return Math.floor(Math.random() * 5) + 1;
}

let randomHp = RandomStat();
let randomStr = RandomStat();
let randomSp = RandomStat();

//busco la "Clase" del jugador
function SerchRol() {
    switch (rol) {
        case "Tanque" || "tanque":
            randomHp += 20;
            break;
        case "Daño" || "daño":
            randomStr += 20;
            break;
        case "Especialista" || "especialista":
            randomSp += 20;
            break;
        default:
            break;
    }
}

SerchRol();

// declaro variables para la subida de nivel
let hpUp = randomHp;
let strUp = randomStr;
let spUp = randomSp;

function statsLvl() {
    for (let i = 0; i < levels; i++) {
        hpUp += RandomStat();
        strUp += RandomStat();
        spUp += RandomStat();
        alert("Subiste a nivel: " + (i + 1) + "\n" +"Vida: " + hpUp + "\n" + " Daño: " + strUp  + "\n" + " Velocidad: " + spUp)
    }
    alert("Felicidades subiste a nivel: " + levels)
}

statsLvl();

//guardo el personaje al inicio y al final de la simulacion
let CharacterOrigin = {
    name: Name,
    level: 1,
    hp: randomHp,
    str: randomStr,
    sp: randomSp,
};

let CharacterLVL = {
    name: Name,
    level: levels,
    hp: hpUp,
    str: strUp,
    sp: spUp,
};

console.log(CharacterOrigin);
console.log(CharacterLVL);

// Plantilla de cadena para la información del personaje
const characterInfoTemplate = (character) => `
    <h2>${character.name}</h2>
    <p>Level: ${character.level}</p>
    <p>HP: ${character.hp}</p>
    <p>STR: ${character.str}</p>
    <p>SP: ${character.sp}</p>
`;

const characterInfoContainer = document.getElementById('characterInfoContainer');


characterInfoContainer.innerHTML = characterInfoTemplate(CharacterOrigin) + characterInfoTemplate(CharacterLVL);

}

