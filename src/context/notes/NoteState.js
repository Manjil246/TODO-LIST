import NoteContext from './noteContext.js'
import { useState } from 'react'

const NoteState = (props) =>{
    const notesInitial = 
        [
            {
              "_id": "65d0f837e41a5732b2ccd863",
              "user": "65cfa6bdf31a3d1c3553c32b",
              "title": "Afternoon",
              "description": "Have to do coding",
              "tag": "personal",
              "date": "2024-02-17T18:17:27.131Z",
              "__v": 0
            },
            {
              "_id": "65d0f837e41a5732b2ccd865",
              "user": "65cfa6bdf31a3d1c3553c32b",
              "title": "Afternoon",
              "description": "Have to do coding",
              "tag": "personal",
              "date": "2024-02-17T18:17:27.293Z",
              "__v": 0
            },
            {
              "_id": "65d0f837e41a5732b2ccd867",
              "user": "65cfa6bdf31a3d1c3553c32b",
              "title": "Afternoon",
              "description": "Have to do coding",
              "tag": "personal",
              "date": "2024-02-17T18:17:27.458Z",
              "__v": 0
            },
            {
              "_id": "65d0f837e41a5732b2ccd869",
              "user": "65cfa6bdf31a3d1c3553c32b",
              "title": "Afternoon",
              "description": "Have to do coding",
              "tag": "personal",
              "date": "2024-02-17T18:17:27.604Z",
              "__v": 0
            },
            {
              "_id": "65d0f837e41a5732b2ccd86b",
              "user": "65cfa6bdf31a3d1c3553c32b",
              "title": "Afternoon",
              "description": "Have to do coding",
              "tag": "personal",
              "date": "2024-02-17T18:17:27.749Z",
              "__v": 0
            },
            {
              "_id": "65d0f837e41a5732b2ccd86d",
              "user": "65cfa6bdf31a3d1c3553c32b",
              "title": "Afternoon",
              "description": "Have to do coding",
              "tag": "personal",
              "date": "2024-02-17T18:17:27.907Z",
              "__v": 0
            },
            {
              "_id": "65d0f838e41a5732b2ccd86f",
              "user": "65cfa6bdf31a3d1c3553c32b",
              "title": "Afternoon",
              "description": "Have to do coding",
              "tag": "personal",
              "date": "2024-02-17T18:17:28.053Z",
              "__v": 0
            },
            {
              "_id": "65d0f838e41a5732b2ccd871",
              "user": "65cfa6bdf31a3d1c3553c32b",
              "title": "Afternoon",
              "description": "Have to do coding",
              "tag": "personal",
              "date": "2024-02-17T18:17:28.202Z",
              "__v": 0
            },
            {
              "_id": "65d0f838e41a5732b2ccd873",
              "user": "65cfa6bdf31a3d1c3553c32b",
              "title": "Afternoon",
              "description": "Have to do coding",
              "tag": "personal",
              "date": "2024-02-17T18:17:28.306Z",
              "__v": 0
            }
          ]


    const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;