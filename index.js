require('dotenv').config()
const express = require('express')
const mongooge = require('mongoose')
const app = express()

const Person = require('./models/Person')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//Rotas API
const personRouter = require('./routes/personRoutes')

app.use('/person', personRouter)

//endpoint
app.get('/', (req, res) => {
    res.json({msg: 'Teste de exibição'})
})

//Conexao DB
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongooge.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.o5sy3g4.mongodb.net/?retryWrites=true&w=majority`,)

.then(() => {
    console.log("Conectado ao banco de dados")
    app.listen(3000)
})
.catch((err) => console.log(err))

