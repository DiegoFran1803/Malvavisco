function buttons(user) {
    //Boton de Agregar
    $('.btn-add').each(function(i) {
        //Al hacer Click en el Boton
        $(this).click(function() {
            //Variables
            let valueTag = $($('.value')[i]);
            let value = parseInt(valueTag.text());

            //Agregar valor
            value++;
            
            //Comprobar si se Cumplio el Objetivo
            if(value > objectives[i].number) value--;
            else rewards(user, i, 0);

            //Guardar los Datos
            user.objectives[i] = value;
            localStorage.setItem('user', JSON.stringify(user));
               
            //Reiniciar
            init();
        })
    });
    
    $('.btn-remove').each(function(i) {
        $(this).click(function() {
            let valueTag = $($('.value')[i]);
            let value = parseInt(valueTag.text());
            value--;
    
            if(value < 0) value = 0;
            else rewards(user, i, 1);

            valueTag.text(value);

            user.objectives[i] = value;
            localStorage.setItem('user', JSON.stringify(user));

            paint(user, objectives);
        })
    });
}