const http = require("http");
const fs = require("fs");

let porta = 3000;
let host = "localhost";

    const server = http.createServer((req, res) => {
        res.setHeader('content-type', 'text/html');
        fs.readFile('page1.html', (erro, data) => {
            if (erro) {
                res.write("Não consegui abrir o html");
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        }) 
    }
    )
    
        
    server.listen(porta, host, () => {
        console.log("Servidor em ação");
    })
