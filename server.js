const express = require('express')
const app = express()

app.listen(8080, () =>  {
    console.log('Listening!')
})

app.get('/', function(req, res, next){
    res.json({
        'message': 'Hello world!'
    })
})