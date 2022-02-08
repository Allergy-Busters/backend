const express = require('express')
const app = express()
const PORT = 7200
const cors = require('cors')
const dailyLogController = require('./controllers/dailyLog')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/entries', dailyLogController)

app.listen(PORT, () => {
    console.log('Allergy Busters is running on port', PORT, '🤧✅')
})