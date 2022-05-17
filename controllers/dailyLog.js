// const { Router } = require('express')
const express = require('express')
// const {findById} = require("../models/dailyLogs")
const router = express.Router()
const DailyLog = require('../models/dailyLogs')
const Users = require("../models/users")
// const multer= require('multer')
// const upload = multer()


// Index Route (Main page)
// router.get("/:userId", async (req, res) => {
//     try {
//       const user = await Users.findById(req.params.id);
//       const dailyLogs = await DailyLog.find({owner:req.params.id});
//       res.status(200).json(dailyLogs);
//     } catch (err) {
//       res.status(500).json(err)
//     }
//   })
router.get('/', (req, res) => {
    // console.log("hitting this route")
    DailyLog.find({"username": req.session.username}, (error, entries) => {
        if(error) {
            res.status(400).json({error: error.message})
        }
        console.log(entries)
        res.status(200).json(entries)
    })
})
        // .populate('owner')
        // .exec((err, dailyLogs))
    //     if (err) {
    //         res.status(400).json({err: err.message})
    //     }
    //     res.status(200).json(dailyLogs)
    // })
    //     .then((dailyLogs) => res.json(dailyLogs))
    //     .catch(next)
    //     .exec((error, entries) => {
    //     if(error) {
    //         res.status(400).json({error: error.message})
    //     }
    //     // console.log(entries)
    //     res.status(200).json(entries)

//Show Route
router.get('/details/:id', (req, res)=> {
    DailyLog.findById(req.params.id, (error, dailyLogs) => {
        if (error) {
            res.status(400).json({error: error.message})
        }
        res.status(200).json(dailyLogs)
    })
    // .populate('owner') 
    // .then((dailyLog) => res.json(dailyLog))
    // .catch(next);

    // (error, foundEntry)=>{
    //     if(error) {
    //         res.status(400).json({error: error.message})
    //     }
    //     // console.log(foundEntry)
    //     res.status(200).json(foundEntry)
})


// Create POST 

router.post('/',(req,res) => {
    DailyLog.create(req.body, (error, newEntry) => {
        // console.log(req.body)
        // console.log(req.file)
        if(error){
            res.status(400).json({error: error.message})
            return
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
          DailyLog.find({"username": req.session.username},(error, remainingEntries) => {
            // .populate('owner') 
            res.status(200).json(remainingEntries)
        })
        //     (error, remainingEntries) => {
        //     res.status(200).json(remainingEntries)
        // })
    })
}) 


//Update/Edit Route
router.put('/edit/:id', (req, res) => {
    DailyLog.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedEntry) => {
        if(error) {
            res.status(400).json({error: error.message})
            // console.log(error)
        }
        DailyLog.find({}).populate('owner')
        .exec((error, updatedLog))
        // console.log(updatedEntry)
        res.status(200).json(updatedLog)
    })
})




module.exports = router