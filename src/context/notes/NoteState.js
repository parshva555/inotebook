import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
    const s1= {
        "name" : "parshva",
        "class" : "5b"
    }
    const [state,setState] = useState(s1);
    const update = () =>{
        setTimeout(()=>{
            setState({
                "name" : "parshva dani",
                "class" : "ty cs"
            })
        },3000)
    }
    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
