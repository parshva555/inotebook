const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'ParshvaDani'
const { body, validationResult } = require('express-validator');
//create a User using : POST "/api/auth/createuser". No Login Required
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({min:5}),
],async (req,res)=>{
    // If there are errors return bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    // Check whether the user with same email exists already 
    try {
        let user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({error:"Sorry a user with this email already exist"})
        }
        // Create a new user
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt)
        user = await User.create({
            name:req.body.name, 
            password:secPass,
            email:req.body.email
        })
        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        res.json({authToken:authToken})
        // res.json(user)
        //Catch errors  
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some Error Occured")
    }

})
module.exports = router
 