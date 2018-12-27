const fs= require('fs');

fs.watch(__dirname + '/archivo.txt', (event, filename)=>{
    console.log('Event: ', event);

    fs.readFile(__dirname + '/archivo.txt', (err,data)=>{
        if(err){
            throw err;
        }

        console.log('File: ', filename);
        console.log('Content: ', data.toString());
    });
});