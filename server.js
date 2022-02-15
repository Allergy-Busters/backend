require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 7200
const SESSION_SECRET= process.env.SESSION_SECRET
const cors = require('cors')
const session = require('express-session')
const dailyLogController = require('./controllers/dailyLog')
const sessionController = require('./controllers/session')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use('/entries', dailyLogController)
app.use('/session', sessionController)

app.listen(PORT, () => {
    console.log('Allergy Busters is running on port', PORT, '🤧✅')
})