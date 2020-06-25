const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(function(req,res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
}); //disables security

app.get('/creators', async (req, res) => {
    const creators = [
        {name: 'Jenna Marbles', img: 'https://'},
        {name: 'Julien Solometa', img: 'https://'},
        {name: 'Danny Gonzales', img: 'https://'},
    ]
    res.send(creators)
})

app.post('/creators', async (req, res) => {
    console.log(req,body)
    res.send('success')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) 