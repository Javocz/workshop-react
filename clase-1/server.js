// const http = require("http");
// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("<!DOCTYPE html>");
//     response.write("<html>");
//     response.write("<head>");
//     response.write("<title>Hello World Page</title>");
//     response.write("</head>");
//     response.write("<body>");
//     response.write("Hello World!");
//     response.write("</body>");
//     response.write("</html>");
//     response.end();
//     // ES FUNDAMENTAL EL RESPONSE.END PORQUE SINO NO VA A DAR POR TERMINADA LA ESCRITURA
// });

// server.listen(process.env.PORT || 3000, () =>{
//     console.log("Server is listening");
// });



// const fs=require("fs");
// const http = require("http");
// const server = http.createServer((request, response) => {
//     fs.readFile(__dirname + '/index.html', (err, data)=>{
//         if(err){
//             response.writeHead(404, {"Content-Type": "text/plain"});
//             response.write(404, "Error reading file...");
//             response.end();
//         } else{
//             response.writeHead(200, {"Content-Type": "text/html"});
//             response.write(data.toString());
//             response.end();
//         }
//     })
// });

// server.listen(process.env.PORT || 3000)


const fs=require("fs");
const http = require("http");

const utils = require('./utils');

const server = http.createServer((request, response) => {
    utils.fileToString(__dirname + '/index.html', (err, data)=>{
        if(err){
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write(404, "Error reading file...");
            response.end();
        } else{
            response.writeHead(200, {"Content-Type": "text/html"})
            response.write(data);
            response.end();
        }
    })
});

server.listen(process.env.PORT || 3000)