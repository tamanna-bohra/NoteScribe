import React from 'react';



const About = () => {

  return (
    <div>
      <h1 className='text-center mb-3'>WHY USE NOTESCRIBE?</h1>
      <div className='container text-wrap'>
        <p className='text-center ' style={{ marginLeft: 60, marginRight: 60 }}>NoteScribe is your one stop app to securely save all your notes.This app gives you a platform to keep track of all your activities,project planning and makes your note taking experience smoother. </p>
        <div className='d-flex '>
        <div className="card mx-3" style={{ width: 18 + "rem", marginTop: 60 + "px" }} >
          <img src="images/secure.png" style={{ width: 100, height: 100, padding: 10 }} alt="..." />
          <div className="card-body">
            <h4>ENCRYPTED</h4>
            <p className="card-text">Encrypted notes app with robust security measures ensuring data privacy and protection. User-friendly and reliable for sensitive information.</p>
          </div>
        </div>
        <div className="card mx-3" style={{ width: 18 + "rem", marginTop: 60 + "px" }} >
          <img src="images/speech.png" style={{ width: 100, height: 100, padding: 10 }} alt="..." />
          <div className="card-body">
          <h4>KEEP IT TOGETHER</h4>
            <p className="card-text">Encrypted notes app with robust security measures ensuring data privacy and protection. User-friendly and reliable for sensitive information.</p>
          </div>
        </div>
        <div className="card mx-3" style={{ width: 18 + "rem", marginTop: 60 + "px" }} >
          <img src="images/categories.png" style={{ width: 100, height: 100, padding: 10 }} alt="..." />
          <div className="card-body">
          <h4>TAGGING & CATEGORIZATION</h4>
            <p className="card-text">Encrypted notes app with robust security measures ensuring data privacy and protection. User-friendly and reliable for sensitive information.</p>
          </div>
        </div>
      </div>
    </div>
    </div >
  )
}

export default About