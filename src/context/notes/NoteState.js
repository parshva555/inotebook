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
    return (
        <NoteContext.Provider value={{notes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
