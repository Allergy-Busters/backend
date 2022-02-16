require('dotenv').config()
const express = require('express')
const app = express()
const multer = require('multer')
const PORT = 7200
const SESSION_SECRET= process.env.SESSION_SECRET
const cors = require('cors')
const session = require('express-session')
const bodyParser = require('body-parser')
const dailyLogController = require('./controllers/dailyLog')
const sessionController = require('./controllers/session')

// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './public/images')
//     }, 
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '--' + file.originalname)
//     }
// })

// const upload = multer({storage: fileStorageEngine})

const upload = multer()

// app.post('/single', upload.single('image'), (req,res)=>{
//     res.send("Single File upload success")
// })



app.use(cors())
app.use(bodyParser.json())

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