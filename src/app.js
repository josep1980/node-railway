import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'
 
const app = express()
app.listen(PORT)
console.log("server"+PORT)


app.get('/',async (req,res) => {
    const [rows] = await pool.query('select * from users')
    res.json(rows)
})

app.get ('/ping', async (req,res) => {
    const [result] = await pool.query('select "HELLO WORLD" as RESULT')
    res.send(result)
})

app.get ('/create', async (req,res) => {
    const result = await pool.query('insert into users(name) values("john")')
        res.send(result)
})
