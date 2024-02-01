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
            randomHp += 10;
            break;
        case "Daño" || "daño":
            randomStr += 10;
            break;
        case "Especialista" || "especialista":
            randomSp += 10;
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
    }
}

statsLvl();

//comparo el personaje al inicio y al final de la simulacion
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