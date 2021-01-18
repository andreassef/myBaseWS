const express = require('express')
const bodyParser = require('body-parser');
const app = express()
require('dotenv').config()

app.use(bodyParser.json())

const port = process.env.PORT

app.listen(port, () => console.log(`Server up at port ${port}`))