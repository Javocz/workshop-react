let http=require('http')
let fs=require('fs')
let form=fs.readFileSync('./lista.html')

let data=[{id:1, description:'Ir a clase.'}]

http
    .createServer(function (request, response){

        if(request.method==='POST'){
            response.writeHead(200,{
                'Content-type':'application/json'
            })

            response.write(form)
        }    
    } 
    else if(request.method==='POST'){
        console.log()
    }

        
        response.end()
    })
    .listen(3000, () => {
        console.log('Listening on http://localhost:3000/')
    })