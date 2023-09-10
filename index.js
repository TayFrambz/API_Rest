import express from 'express'
import bodyParser from 'body-parser'

import usersRoutes from './routes/people.js'

const app = express()
const PORT = 3002

//app.use(express.bodyParser())

app.use(bodyParser.json())

app.use('/people', usersRoutes)

app.get('/', (req, res) => {
    console.log('teste')

    res.send('Olá dá página inicial')
})

app.listen(PORT, () => console.log('Rodando na porta: ', PORT))