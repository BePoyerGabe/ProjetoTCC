const express = require('express')
const routes = require('./routes')

const api = express();

api.use(
    express.urlencoded({
        extended: true
    })
)
api.use(express.json())
api.use(routes)

api.listen(5000, () => {
    console.log('api running on port 5000......')
})