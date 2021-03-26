const router = require('express').Router();
const bcrypt = require("bcryptjs")
const users = require("../jokes/jokes-data")
const {validateUser, signToken, validateRegistration} = require("../middleware/restricted")

router.post('/register', validateRegistration(), (req, res,next) => {
      try{
        const {username, password} = req.body
        const newUser =  users.add({
            username, password: bcrypt.hash(password, 12)
        })
        
        res.status(201).json(newUser)
         }catch(err){
           next(err)
         }
});

router.post('/login', validateUser() , signToken(),(req, res,next) => {
      try{
        const {username} = req.body
        res.status(200).json({
            message: `Welcome ${username}!`,
            token: req.token
        })
      }catch(err) {
        next(err)
      }
});

module.exports = router;
