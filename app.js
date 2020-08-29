const express = require('express')
const cors = require('cors')

const { getPeople, createPerson } = require('./src/config/db_connection')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', async (req, resp) => {
    
    const peoples = await getPeople()
    // const peoples = {
    //     status: 'ok'
    // }

    return resp.json(peoples)

})

app.post('/register', async (req, resp) => {

    const { name, age, sex } = req.body
    
    const inserted = await createPerson({
        name,
        age,
        sex
    })

    return resp.json({
        'successfully': inserted
    })

})

app.listen(3333)