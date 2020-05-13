import React from 'react'
import * as actionTypes from '../store/constants';
import { connect } from 'react-redux';

function NoteForm(props) {

  return (
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
  )
}

const mapStateToProps = state => ({
  inputTitle: state.inputs.inputTitle,
  inputContent: state.inputs.inputContent,
})

const mapDispatchToProps = dispatch => {
  return {
    onTitleChange: (title) => dispatch({type: actionTypes.TITLE_CHANGE, title: title}),
    onContentChange: (content) => dispatch({type: actionTypes.CONTENT_CHANGE, content: content}),
    onAddNote: (title, content, event) => dispatch({type: actionTypes.ADD_NOTE, title: title, content: content, event: event}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
