import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "65325fca6d90ff21a68012401",
          "user": "6532467091bda43f38bd5665",
          "title": "my title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2023-10-20T11:08:58.779Z",
          "__v": 0
        },
        {
          "_id": "65325fca6d90ff21a68012422",
          "user": "6532467091bda43f38bd5665",
          "title": " my title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2023-10-20T11:08:58.950Z",
          "__v": 0
        },
        {
            "_id": "65325fca6d90ff21a68012423",
            "user": "6532467091bda43f38bd5665",
            "title": " my title",
            "description": "please wake up early",
            "tag": "personal",
            "date": "2023-10-20T11:08:58.950Z",
            "__v": 0
          },
          {
            "_id": "65325fca6d90ff21a68012424",
            "user": "6532467091bda43f38bd5665",
            "title": " my title",
            "description": "please wake up early",
            "tag": "personal",
            "date": "2023-10-20T11:08:58.950Z",
            "__v": 0
          },
          {
            "_id": "65325fca6d90ff21a6801242",
            "user": "6532467091bda43f38bd5665",
            "title": " my title",
            "description": "please wake up early",
            "tag": "personal",
            "date": "2023-10-20T11:08:58.950Z",
            "__v": 0
          },
          {
            "_id": "65325fca6d90ff21a68012425",
            "user": "6532467091bda43f38bd5665",
            "title": " my title",
            "description": "please wake up early",
            "tag": "personal",
            "date": "2023-10-20T11:08:58.950Z",
            "__v": 0
          },
          {
            "_id": "65325fca6d90ff21a68012426",
            "user": "6532467091bda43f38bd5665",
            "title": " my title",
            "description": "please wake up early",
            "tag": "personal",
            "date": "2023-10-20T11:08:58.950Z",
            "__v": 0
          },
          {
            "_id": "65325fca6d90ff21a68012427",
            "user": "6532467091bda43f38bd5665",
            "title": " my title",
            "description": "please wake up early",
            "tag": "personal",
            "date": "2023-10-20T11:08:58.950Z",
            "__v": 0
          }
      ]
     
      const [notes,setNotes] = useState(notesInitial);

      // Add a Note
      const addNote = (title,description,tag) => {
        // To do API call
        console.log("Adding a new note")
        const note ={
          "_id": "65325fca6d90ff21a6801242721341",
          "user": "6532467091bda43f38bd5665",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-10-20T11:08:58.950Z",
          "__v": 0
        }
          setNotes(notes.concat(note));
      }
      // Delete a Note
       // To do API call
      const deleteNote = (id) => {
        console.log("Deleting the note with id" + id)
        const newNotes = notes.filter((note) => {return note._id!==id})
        setNotes(newNotes);
      }
      // Edit a Note
      const editNote = (id,title,description,tag) => {

      }
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
