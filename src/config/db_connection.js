const { Client } = require('pg')

const clientConfig = {
    user: 'postgres',
    host: 'db',
    database: 'desafio',
    password: 'senha',
}

async function getPeople() {
    
    const client = new Client(clientConfig)
    
    await client.connect()

    const sql = `SELECT * FROM person`

    try {
        const peoples = await client.query(sql)
        
        await client.end()
        return peoples.rows

    } catch (err) {
        console.log(err.stack)
        await client.end()
        return false
    }

}

async function createPerson(person) {

    const client = new Client(clientConfig)
    
    await client.connect()

    const sql = `INSERT INTO person(name, age, sex) VALUES($1, $2, $3)`
    const values = [person.name, person.age, person.sex]

    try {
        const res = await client.query(sql, values)
        
        await client.end()
        return !!res.rowCount

    } catch (err) {
        console.log(err.stack)
        await client.end()
        return false
    }

}

module.exports = { getPeople, createPerson }