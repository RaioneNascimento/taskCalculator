const express = require("express");
const server = express();
const routes = require("./routes")
const path = require("path");
const port = 3000

//usando templete engine
server.set('view engine', 'ejs')

// __dirname retorna o diretório onde o arquivo está
server.set('views', path.join(__dirname, 'views'))

//habilitar arquivos statics
server.use(express.static("public"))

//usar o req.body
server.use(express.urlencoded({ extended: true }))

//routes
server.use(routes)

server.listen(port, () => console.log(`server up in http://localhost:${port}`))





