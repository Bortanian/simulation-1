const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller')
require('dotenv').config()
const massive = require('massive')


const app = express();
app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

app.get('/api/inventory', ctrl.getInventory)




const port = 6464
app.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})