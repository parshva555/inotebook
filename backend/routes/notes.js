const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Note = require('../models/Notes')
const router = express.Router();
// ROUTE 1 : Get all the notes using : GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try {
        const notes  = await Note.find({user:req.user.id})
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error ")
    }
})
// ROUTE 2 : Add a new notes using : POST "/api/notes/addnote" . Login required
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
// ROUTE 3 : Updating a note using : POST "/api/notes/updatenote" . login required

router.put('/updatenote/:id',fetchuser,[],async (req,res)=>{
    const {title,description,tag} = req.body
    //creating a new note object
    const newNote = {};
    if(title){
        newNote.title= title
    }
    if(description){
        newNote.description= description
    }
    if(tag){
        newNote.tag= tag
    }
    // find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not found");
    }
    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not allowed")
    }
    note = await Note.findByIdAndUpdate(req.params.id, {$set:newNote},{new:true})
    res.json({note})

})

module.exports = router
