const fs = require('fs');

// STRING INTERPOLATION CON COMILLAS FRANCESAS PARA EVITAR ESTAR CONCATENANDO CON LOS + Y ''

// const file = fs.readFileSync(__dirname + '/archivo.txt');
// GENERA UNA LLAMADA SINCRONA POR LO QUE BLOQUEA EL LOOP


// const fileAsync = fs.readFile(__dirname + '/archivo.txt', function callback (err, data)

const fileAsync = fs.readFile(__dirname + '/archivo.txt', (err, data)=>{
    if (err) {
        throw err;
    }
    console.log (data.toString());
});