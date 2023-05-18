
//Pintar Datos
function paint(user) {
    //Variables
    let level = user.level;
    let xp = user.px;
    let xpBar = Math.round(user.xp / (user.level + 1));
    let strength = Math.round(parseFloat(user.stats[0]));
    let agility = Math.round(parseFloat(user.stats[1]));
    let intelligence   = Math.round(parseInt(user.stats[2]));  

    //Pintar Nivel
    $('.level').text(user.level);

    //Pintar Experiencia
    if(xp >= (level + 1) * 100) user = levelUp(user);
    $('.xp').css('width', xpBar + '%');
    
    //Pintar Stats
    $('.strength').text(strength);
    $('.agility').text(agility);
    $('.intelligence').text(intelligence);

    //Vaciar la Lista de Objetivos
    $('.objectives').html('');

    //Pintar la Lista de Objetivos
    objectives.forEach((objective, i) => {
        //Variables
        let value = user.objectives[i];
        let percentage = Math.round((value * 100) /objective.number);
        
        //Plantilla
        let template = `
            <div class="col mb-3">
                <div class="card bg-dark h-100">
                    <div class="card-header">
                        Objetivo #`+ (i+1) +`
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">`+ (i+1) +`. `+ objective.description + ` ` + objective.number + ` ` + objective.units +`</h4>
                        <div class="d-flex mb-3 align-items-center">
                            <span>Total: </span>
                            <span class="badge border border-primary text-white ms-2 btn-remove">-</span>
                            <span class="fs-5 ms-2 value">`+ value +`</span>
                            <span class="badge bg-primary ms-2 btn-add">+</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <h6 class="badge bg-primary mb-0 me-1">`+ percentage +`%</h6>
                            <div class="progress w-100" role="progressbar" aria-label="Warning example" aria-valuenow="`+ percentage +`" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-primary" style="width: `+ percentage +`%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        //Pintar el Objetivo
        $('.objectives').append(template);
    });

    //Botones
    buttons(user, objectives);
}