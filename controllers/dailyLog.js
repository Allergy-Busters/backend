// const { Router } = require('express')
const express = require('express')
const router = express.Router()
const DailyLog = require('../models/dailyLogs')
const multer= require('multer')
const upload = multer()


// Index Route (Main page)
router.get('/', (req, res) => {
    // console.log("hitting this route")
    DailyLog.find({}, (error, entries) => {
        if(error) {
            res.status(400).json({error: error.message})
        }
        // console.log(entries)
        res.status(200).json(entries)
    })
})

//Show Route
router.get('/details/:id', (req, res)=> {
    DailyLog.findById(req.params.id, (error, foundEntry)=>{
        if(error) {
            res.status(400).json({error: error.message})
        }
        // console.log(foundEntry)
        res.status(200).json(foundEntry)
    })
})


// Create POST 

router.post('/', upload.single("img"), (req,res, next) => {
    DailyLog.create(req.body, (error, newEntry) => {
        // console.log(req.body)
        // console.log(req.file)
        if(error){
            res.status(400).json({error: error.message})
        }
        res.status(200).json(newEntry)
    })
})

// DELETE

router.delete('/details/:id', (req, res) => {
    DailyLog.findByIdAndDelete(req.params.id,(error, entry)=>{
        if (error) {
            res.status(400).json({ error: error.message })
          }
          DailyLog.find({}, (error, remainingEntries) => {
            
            res.status(200).json(remainingEntries)

        })
    })
}) 


//Update/Edit Route
router.put('/edit/:id', (req, res) => {
    DailyLog.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedEntry) => {
        if(error) {
            res.status(400).json({error: error.message})
            // console.log(error)
        }
        // console.log(updatedEntry)
        res.status(200).json(updatedEntry)
    })
})




module.exports = router