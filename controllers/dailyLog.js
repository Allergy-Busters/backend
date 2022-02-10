// const { Router } = require('express')
const express = require('express')
const router = express.Router()
const DailyLog = require('../models/dailyLogs')


// Index Route (Main page)
router.get('/', (req, res) => {
    console.log("hitting this route")
    DailyLog.find({}, (error, entries) => {
        if(error) {
            res.status(400).json({error: error.message})
        }
        console.log(entries)
        res.status(200).json(entries)
    })
})


// Create POST 

router.post('/', (req,res) => {
    DailyLog.create(req.body, (error, newEntry) => {
        if(error){
            res.status(400).json({error: error.message})
        }
        res.status(200).json(newEntry)
    })
})


module.exports = router