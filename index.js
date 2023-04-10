const express = require('express')
const app = express()
const saudacao = require('./saudacaomid')

app.use(saudacao('Daniel'))

app.use('/home', (req, res, next) => {
    console.log('antes..')
    next()

})

app.get('/home',(req, res,next) => {
    console.log('durante..')
    res.json([
        {id: 7, name: 'Ana', position: 1 },
        {id: 9, name: 'Dan', position: 3 }
    ])
next()
})


app.use('/home', (req, res, next) => {
    console.log('depois..')
    next()

})


app.listen(3000, ()  => {
    console.log('Backend executando....')
})
