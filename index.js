require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('anjaliupadhyaydotcom')
})

app.get('/login', (req,res) => {
    res.send('login successfull')

})

app.get('/youtube', (req,res) =>{
    res.send('<h2> YOUTUBE Chai Aur Code</h2>')

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})