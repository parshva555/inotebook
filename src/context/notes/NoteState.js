import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {
    // To do API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMjQ2NzA5MWJkYTQzZjM4YmQ1NjY1In0sImlhdCI6MTY5Nzc5MzY0OH0.JwXhNrBPkKpmnu3BfzjK81_Vv5V5VElfKotvbNiuB74",
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  };
  // Add a Note
  const addNote = async (title, description, tag) => {
    // To do API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMjQ2NzA5MWJkYTQzZjM4YmQ1NjY1In0sImlhdCI6MTY5Nzc5MzY0OH0.JwXhNrBPkKpmnu3BfzjK81_Vv5V5VElfKotvbNiuB74",
      },
      body: JSON.stringify({title,description,tag}),
    });
  
    console.log("Adding a new note");
    const note = {
      _id: "65325fca6d90ff21a6801242721341",
      user: "6532467091bda43f38bd5665",
      title: title,
      description: description,
      tag: tag,
      date: "2023-10-20T11:08:58.950Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a Note
  // To do API call
  const deleteNote = (id) => {
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzMjQ2NzA5MWJkYTQzZjM4YmQ1NjY1In0sImlhdCI6MTY5Nzc5MzY0OH0.JwXhNrBPkKpmnu3BfzjK81_Vv5V5VElfKotvbNiuB74",
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = response.json();

    // LOgic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
