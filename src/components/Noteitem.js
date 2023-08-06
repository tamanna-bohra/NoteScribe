import {React,useContext} from 'react';
import NoteContext from '../context/NoteContext';


export const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note,updateNote,showAlert } = props
  return (
    <div>
      <div className="col md-3">
        <div className="card my-3 " >

          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i className="fa-solid fa-trash-can mx-3" onClick={()=>{deleteNote(note._id);
            props.showAlert("Note deleted successfully!","success")}}></i> 
            <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)
            }}></i>

          </div>
        </div>
      </div>
    </div>
  )
}
