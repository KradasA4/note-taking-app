import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/constants';
import { act } from 'react-dom/test-utils';

const Notes = (props) => {
  
  return(
    <div>
      <h1>Note-taking App</h1>
      <form action="#" id="notes-form">
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
          required
          onChange={(e) => props.onContentChange(e.target.value)}
          >
        </textarea>
        <br/>
        <button form="notes-form"
          className='br2'
          onClick={
            (e) => props.onAddNote(props.inputTitle, props.inputContent, e)}
        >
          add a note
        </button>
      </form>
      <hr/>

      {/* Notes view Section */}
      <div>
        <h2>Notes</h2>        
        <br/>
        {/* Show active notes */}
        <button onClick={props.onSelectActive}>Show active notes</button>
        {/* Show deleted notes */}
        <button onClick={props.onSelectDeleted}>Shot deleted notes</button>
        <br/>
        <ul>
          {
          
          props.currentNotes.map((note) => {
            return (
              <li>
                {/* <span>ID: {note.id}</span><br/> */}
                <span>Title: {note.title}</span>
                <button onClick={() => props.onDeleteNote(note.id)}>X</button>
                <br/>
                <span>Content: {note.content}</span>
                <br/>
                <span>Date: {note.date}</span>
                <br/>
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
    activeNotes: state.notes.activeNotes,
    deletedNotes: state.notes.deletedNotes,
    currentNotes: state.notes.currentNotes
})

const mapDispatchToProps = dispatch => {
  return {
    onTitleChange: (title) => dispatch({type: actionTypes.TITLE_CHANGE, title: title}),
    onContentChange: (content) => dispatch({type: actionTypes.CONTENT_CHANGE, content: content}),
    onAddNote: (title, content, event) => dispatch({type: actionTypes.ADD_NOTE, title: title, content: content, event: event}),
    onDeleteNote: (id) => dispatch({type: actionTypes.DELETE_NOTE, targetId: id}),
    onSelectActive: () => dispatch({type: actionTypes.SELECT_ACTIVE_NOTES}),
    onSelectDeleted: () => dispatch({type: actionTypes.SELECT_DELETED_NOTES})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notes);