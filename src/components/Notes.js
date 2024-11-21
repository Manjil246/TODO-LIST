import React, { useContext, useEffect , useRef, useState} from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate} from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  let navigate = useNavigate()
 
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }else{
      navigate("/login")
    }
    // eslint-disable-next-line
  }, []);

  const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:""})

  const onChange = (e) =>{
    setNote({...note,[e.target.name] : e.target.value})
  }

  const updateNote = (currentNote)=>{
    ref.current.click();
    setNote({
      id:currentNote._id,
      etitle:currentNote.title,
      edescription:currentNote.description,
      etag:currentNote.tag,
    })

  }
  
    const handleClick = ()=>{
      editNote(note.id,note.etitle,note.edescription,note.etag);
      refClose.current.click();
      props.showAlert('success',"Updated Successfully")
    }
    
  const ref = useRef(null)
  const refClose = useRef(null)

  return (
    <>
      <AddNote showAlert={props.showAlert}/>
      
      <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className="my-3">
              <div className="mb-3">
                  <label htmlFor="etitle" className="form-label"> 
                      Title
                  </label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} minLength={5} required />
                  <div id="emailHelp" className="form-text">

                  </div>
              </div>
              <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                      Description
                  </label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
              </div>
              <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                      Tag
                  </label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} minLength={5} required/>
              </div>
          </form>
            </div>

              <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container row">
        <h1>Your Notes</h1>
        {notes.length === 0 && "No notes to display"}
        {notes.map((note) => { 
          return <NoteItem key={note._id} note={note} updateNote = {updateNote} showAlert={props.showAlert}/>;
        })}
      </div>
    </>
  );
};

export default Notes;
