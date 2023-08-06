import React, { useState } from 'react'
import NoteContext from '../context/NoteContext';
import { useContext } from 'react';

const Addnote = (props) => {
    const context = useContext(NoteContext);
  const { addNote } = context;
  const [note,setNote]=useState({title:"",description:"",tag:""})
  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setNote({title:"",description:"",tag:""})
    props.showAlert("Note added successfully!","success")

  }
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})

  }
  return (
    <div>
        <div className='container my-3'>
      <h2>Add a note</h2>
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
            <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} minLength={5} value={note.tag} required/>
        </div>
        
        <button disabled={note.title.length<5 ||note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
      </form>
      
      
      </div>
    </div>
  )
}

export default Addnote