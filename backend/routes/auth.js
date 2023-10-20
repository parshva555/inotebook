const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'ParshvaDani'
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
//ROUTE 1 : create a User using : POST "/api/auth/createuser". No Login Required
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
        res.status(500).send("Internal Server error ")
    }
})
// ROUTE 2 : Authenticate a User using : POST "/api/auth/login". No Login Required
router.post('/login', [ 
    body('email', 'Enter a valid email').isEmail(), 
    body('password', 'Password cannot be blank').exists(), 
  ], async (req, res) => {
  
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const {email, password} = req.body;
    try {
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error: "Please try to login with correct credentials"});
      }
  
      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare){
        return res.status(400).json({error: "Please try to login with correct credentials"});
      }
  
      const data = {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({authtoken})
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
})


//ROUTE 3 : GET logged in User Details using : POST "/api/auth/getUser". No Login Required
router.post('/getUser', fetchuser, async (req, res) => {
try {
    userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})
module.exports = router
 