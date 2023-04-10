const express = require('express')
const app = express()
const saudacao = require('./saudacaomid')

app.use(saudacao('Daniel'))

app.use('/home', (req, res, next) => {
    console.log('antes..')
    next()

})

app.get('/clientes/relatorio', (req, res ) =>{
    res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req,res) => {
    let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    })
    req.on('end', function() {
        res.send(corpo)
    })
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
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
