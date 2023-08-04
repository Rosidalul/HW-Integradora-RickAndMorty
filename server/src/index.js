const http = require('http');
const PORT = 3001;
const characters = require('./utils/data');

http.createServer((req, res)=>{
    res.setHeader('Acces-Control-Allow-Origin','*');

    if(req.url.includes('/rickandmorty/character')){
       // console.log(req.url.split("/").at(-1))
       const id = req.url.split('/').at(-1)

       let characterFilter = characters.filter((character)=> character.id === Number(id))

       res.writeHead(200, {'content-type':'application/json'})
       res.end(JSON.stringify(characterFilter))
    }
}).listen(PORT, console.log('port on '+ PORT))