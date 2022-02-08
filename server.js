const express = require('express')
const app = express()
const PORT = 7200
const cors = require('cors')

app.use(cors())


app.listen(PORT, () => {
    console.log('Allergy Busters is running on port', PORT, '🤧✅')
})