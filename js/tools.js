//Version
let version = 'v1.0a1'
$('.version').text(version);

//Traer los Datos
function getData(data) {
    return JSON.parse(localStorage.getItem(data));
}

//Guardar los Datos
function setData(data, value) {
    localStorage.setItem(data, JSON.stringify(value));
    return true;
}

//Subir de Nivel
function levelUp(user) {
    //Reiniciar xp
    user.xp = 0;

    //Agregar nivel
    user.level++;

    //Guardar los Datos
    localStorage.setItem('user', JSON.stringify(user));
    
    //Retornar nuevo valor
    return user;
}

//Agregar Recompensas
function rewards(user, i, x) {
    //Variables
    let objective = objectives[i];
    let xp = parseInt(user.xp);
    let strength = parseFloat(user.stats[0]);
    let agility = parseFloat(user.stats[1]);
    let intelligence   = parseInt(user.stats[2]);

    //Agregar o Quitar Recompensas
    if(x == 0) {
        //Agregar Recompensas
        xp += objective.rewards[0];
        strength += objective.rewards[1];
        agility += objective.rewards[2];
        intelligence += objective.rewards[3];
    } else {
        //Quitar Recompensas
        xp -= objective.rewards[0];
        if(xp < 0) xp = 0;
        strength -= objective.rewards[1];
        if(strength < 0) strength = 0;
        agility -= objective.rewards[2];
        if(agility < 0) agility = 0;
        intelligence -= objective.rewards[3];
        if(intelligence < 0) intelligence = 0;
    }

    //Guardar los Datos
    user.xp = xp;
    user.stats[0] = strength;
    user.stats[1] = agility;
    user.stats[2] = intelligence;
    localStorage.setItem('user', JSON.stringify(user));
    
    //Retornar nuevo valor
    return user;
}