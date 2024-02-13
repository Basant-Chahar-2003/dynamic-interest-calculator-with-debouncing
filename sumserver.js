const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors());

app.get("/", function (req, res){
    const a = req.query.a
    const b = req.query.b
    let sum = parseInt(a) + parseInt(b)
    res.send(`${sum}`);
})

app.get("/interest", function (req, res){
    const principle = parseFloat(req.query.principle)
    const rate = parseFloat(req.query.rate)
    const year = parseFloat(req.query.year)

    const total = principle + ((rate*principle)/100)*year
    const interest = ((rate*principle)/100)*year

    res.send({
        total : total,
        interest : interest
    })


})




app.listen(3000)
