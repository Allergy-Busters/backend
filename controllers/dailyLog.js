// const { Router } = require('express')
const express = require('express')
const router = express.Router()
const DailyLog = require('../models/dailyLogs')


// Index Route (Main page)
router.get('/', (req, res) => {
    // console.log("hitting this route")
    DailyLog.find({}, (error, entries) => {
        if(error) {
            res.status(400).json({error: error.message})
        }
        console.log(entries)
        res.status(200).json(entries)
    })
})

//Show Route
router.get('/details/:id', (req, res)=> {
    DailyLog.findById(req.params.id, (error, foundEntry)=>{
        if(error) {
            res.status(400).json({error: error.message})
        }
        console.log(foundEntry)
        res.status(200).json(foundEntry)
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

//Update/Edit Route
router.put('/edit/:id', (req, res) => {
    DailyLog.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedEntry) => {
        if(error) {
            res.status(400).json({error: error.message})
        }
        console.log(updatedEntry)
        res.status(200).json(updatedEntry)
    })
})


module.exports = router