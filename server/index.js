const express = require('express')
const ctrl = require('./Controllers/Controller')

const app = express()
const SERVER_PORT = 5004

app.use(express.json())

app.get('/api/stories', ctrl.getAllStories)
app.get('/api/stories/:title', ctrl.getOneStory)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))