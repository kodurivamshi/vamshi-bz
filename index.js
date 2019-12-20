const express = require('express')
const app = express()
const port = process.env.PORT ||3000

app.use(express.static('public'))
//app.get('/', (req, res) => res.sendFile('Hello world...'))
app.get('/', (req, res) => res.sendFile(__dirname+'/public/htmls/index1.html'))

app.get("/index2", (req, res) => res.sendFile(__dirname+'/public/htmls/index2.html'))
app.get("/index", (req, res) => res.sendFile(__dirname+'/public/htmls/index.html'))

var obj={}
obj.name = "CMRCET";
obj.college = "KODURI VAMSHI";
obj.regno = "17H51A05E3";

app.get("/data", (req, res) => res.json(obj))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))