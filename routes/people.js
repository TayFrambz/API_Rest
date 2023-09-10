import express from 'express'
const router = express.Router()

const users = [
    {
        name: "Carolina Rosa Marina Barros",
        document: "569.679.155-76",
        password: "senhaforte"
    },
   
]

/*router.get('/', (req, res) => {
    console.log(users)
    res.send(users)
})*/

router.get('/', async (req, res) => {
    const {name, document, password} = req.body

    if(!name) {
        res.status(422).json({error: 'O nome é obrigatório'})
    }

    const person = {
        name,
        document,
        password
    }

    try {

        res.status(200).json(people)
        const people = await person.find()

    } catch (error) {
        res.status(500).json({ error: error})
    }
})

router.post('/', (req, res) => {
    

    const user = req.body
    users.push(user)

    res.send(`Cliente ${user.firstName} foi adicionado ao banco de dados`)
})

export default router