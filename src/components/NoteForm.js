import React from 'react'
import './NoteForm.css';

function NoteForm(props) {
  return (
    <form id="notes-form" className="notes-form">
      <label htmlFor="note-title">Title: </label>
      <input
        type="text" 
        id="note-title" 
        placeholder="What's the matter?"
        value={props.inputTitle}
        onChange={(e) => props.onTitleChange(e.target.value)} 
        className="notes-form__input"
      />

      <label htmlFor="note-content">Content: </label>
      <textarea 
        name="note-content" 
        id="note-content" 
        cols="30" 
        rows="15"
        placeholder="Jot down any details here"
        value={props.inputContent}
        required
        onChange={(e) => props.onContentChange(e.target.value)}
        className="notes-form__input"
        >
      </textarea>

      <button form="notes-form"
        className='App__button'
        onClick={(e) => props.onAddNoteThenClearInput(props.inputTitle, props.inputContent, e)}
      >
        add a note
      </button>
    </form>
  )
}

// const mapStateToProps = state => ({
//   inputTitle: state.inputs.inputTitle,
//   inputContent: state.inputs.inputContent,
// })

// const mapDispatchToProps = dispatch => {
//   return {
//     onTitleChange: (title) => dispatch({type: actionTypes.TITLE_CHANGE, title: title}),
//     onContentChange: (content) => dispatch({type: actionTypes.CONTENT_CHANGE, content: content}),
//     onAddNote: (title, content, event) => dispatch({type: actionTypes.ADD_NOTE, title: title, content: content, event: event}),
//   }
// }

export default NoteForm;
