import react from 'react';
import NoteContext from './noteContext.js'

const NoteState = (props) =>{
    const state = {
        'name':"Manjil",
        "age":20
    }
    return(
        <NoteContext.provider value={state}>
            {props.children}
        </NoteContext.provider>
    )
}

export default NoteState;