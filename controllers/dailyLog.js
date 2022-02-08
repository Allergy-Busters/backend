const express = require('express')
const router = express.Router()
const DailyLog = require('../models/dailyLogs')


// Index Route (Main page)





// Create POST 

router.post('/entries', (req,res) => {
    DailyLog.create(req.body, (error, newEntry) => {
        if(error){
            res.status(400).json({error: error.message})
        }
        res.status(200).json(newEntry)
    })
})