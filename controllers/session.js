const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/users')
const router = express.Router()

//router.get('/register', (req,res) => {
    //...
// })

router.post('/register', async (req, res, next) => {
    try {
        if (req.body.password === req.body.confirmPassword) {
            const desiredUsername = req.body.username
            const userExists = await User.findOne({ username: desiredUsername})
            if (userExists){
                console.log('Username already exists!')
                res.status(400).json({msg: 'User already exists', status: 400})
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hashedPassword = bcrypt.hashSync(req.body.password, salt)
                req.body.password = hashedPassword
                const createdUser = await User.create(req.body)
                console.log(createdUser)
                req.session.username = createdUser.username
                // res.redirect <- does this belong to only ejs? Or can we use this with express?
                res.status(200).json({createdUser, status:200})
            }
        } else {
            res.status(400).json({msg: 'Passwords are not matching', status: 400})
            console.log('Passwords are not matching!') 
        }
    } catch (err) {
        next(err)
    }
})


// router.get('/login', (req,res)=>{
    
// })

router.post('/login', async (req, res, next) => {
    try{
        const userToLogin = await User.findOne({username: req.body.username})
        if (userToLogin){
            const validPassword = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (validPassword){
                req.session.username = userToLogin.username
                res.status(200).json({userToLogin, status: 200})
            } else {
                res.status(400).json({status: 400, msg: 'Incorrect Username or Password'})
                console.log('Incorrect username or password')
            }

        } else {
            res.status(400).json({status: 400, msg: 'Invalid Username or Password'})
            console.log('Invalid username or password')
        }

    } catch (err){
        next(err)
    }
})


module.exports = router