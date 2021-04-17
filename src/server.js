const express = require("express");
const server = express();
const routes = require("./routes")
const port = 3000

//usando templete engine
server.set('view engine', 'ejs')

//habilitar arquivos statics
server.use(express.static("public"))

//routes
server.use(routes)

server.listen(port, () => console.log(`server up in http://localhost:${port}`))