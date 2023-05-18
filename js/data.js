//Crear el User si no Existe
if(!localStorage['user']) {
    //User
    let user = {
        'level': 0,
        'xp': 50,
        'stats': [1, 1 ,4],
        'objectives': [1, 1, 1, 1]
    }

    //Guardar
    localStorage.setItem('user', JSON.stringify(user));
}

//Objetivos
let objectives = [
        {
            'description': 'Conseguir',
            'number': 2000,
            'units': 'PEN',
            'rewards': [1, 0, 0, 0]
        },
        {
            'description': 'Terminar',
            'number': 8,
            'units': 'rutas',
            'rewards': [20, 0, 0, 2]
        },
        {
            'description': 'Terminar',
            'number': 2,
            'units': 'cursos',
            'rewards': [20, 0, 0, 2]
        },
        {
            'description': 'Rehabilitacion durante',
            'number': 60,
            'units': 'dias',
            'rewards': [5, 0.5, 0.25, 0]
        },
]