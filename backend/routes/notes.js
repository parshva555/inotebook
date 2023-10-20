const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Note = require('../models/Notes')
const router = express.Router();
// ROUTE 1 : Get all the notes using : GET "/api/notes/fetchallnotes"
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try {
        const notes  = await Notes.find({user:req.user.id})
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error ")
    }
})
// ROUTE 2 : Add a new notes using : POST "/api/notes/addnote"
router.post('/addnote',fetchuser,[
    body('title','Enter a valid title').isLength({min:3}),
    body('description','Description must be atleast 5 characters').isLength({min:5})
],async (req,res)=>{
    try {
        const {title,description,tag} = req.body
        // If there are errors return bad request and the errors
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
    
        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id
        })
        const saveNote = await note.save();
        
        res.json(saveNote)
    }catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error ")
    }
})
module.exports = router
