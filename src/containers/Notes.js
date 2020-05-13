import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/constants';

const Notes = (props) => {
  return(
    <div>
      <h1>Note-taking App</h1>
      <label htmlFor="note-title">Title: </label>
      <input
        type="text" 
        id="note-title" 
        onChange={(e) => props.onTitleChange(e.target.value)} 
      />
      <br/>
      <label htmlFor="note-content">Content: </label>
      <textarea 
        name="note-content" 
        id="note-content" 
        cols="30" 
        rows="10"
        onChange={(e) => props.onContentChange(e.target.value)}
        >
      </textarea>
      <br/>
      <button 
        className='br2'
        onClick={() => props.onAddNote(props.inputTitle, props.inputContent)}
      >
        add a note
      </button>

      <hr/>

      <div>
        <h2>Notes</h2>        
        <br/>
        <button>Show active notes</button>
        <button>Shot deleted notes</button>
        <br/>
        <ul>
          {props.activeNotes.map((note) => {
            return (
              <li>
                <span>Title: {note.title}</span><br/>
                <span>Content: {note.content}</span><br/>
                <span>Date: {note.date}</span><br/>
              </li>
            )
          })}
        </ul>
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
    inputTitle: state.inputs.inputTitle,
    inputContent: state.inputs.inputContent,
    activeNotes: state.notes.activeNotes
})

const mapDispatchToProps = dispatch => {
  return {
    onTitleChange: (title) => dispatch({type: actionTypes.TITLE_CHANGE, title: title}),
    onContentChange: (content) => dispatch({type: actionTypes.CONTENT_CHANGE, content: content}),
    onAddNote: (title, content) => dispatch({type: actionTypes.ADD_NOTE, title: title, content: content})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notes);