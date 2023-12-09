import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "65325fca6d90ff21a6801240",
          "user": "6532467091bda43f38bd5665",
          "title": "my title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2023-10-20T11:08:58.779Z",
          "__v": 0
        },
        {
          "_id": "65325fca6d90ff21a6801242",
          "user": "6532467091bda43f38bd5665",
          "title": "my title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2023-10-20T11:08:58.950Z",
          "__v": 0
        },
        {
          "_id": "6533fa78f2cee55b268433c7",
          "user": "6532467091bda43f38bd5665",
          "title": "New Note",
          "description": "Best Note in the world",
          "tag": "Youtube",
          "date": "2023-10-21T16:21:12.553Z",
          "__v": 0
        },
        {
          "_id": "6573032bd50810dbb0e557bc",
          "user": "6532467091bda43f38bd5665",
          "title": "New Note it is ",
          "description": "parshva dani is te besr",
          "tag": "Youtube",
          "date": "2023-12-08T11:51:07.673Z",
          "__v": 0
        }
      ]

      const [notes,setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
