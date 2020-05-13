import React from 'react'
import * as actionTypes from '../store/constants';
import { connect } from 'react-redux';

function NotesDisplay(props) {

  const currentNotes = () => {
    if(props.currentNotes === 'deletedNotes') {
      return props.deletedNotes;
    } else {
      return props.activeNotes;
    }
  }

  return (
    <div>
      <h2>Notes</h2>        
      <br/>
      <button 
        className="f6 link br1 ba bw1 ph3 pv2 mb2 dib bg-light-purple"
        onClick={props.onSelectActive}
      >
        Show active notes
      </button>
      <button 
      className="f6 link br1 ba bw1 ph3 pv2 mb2 dib bg-hot-pink"
        onClick={props.onSelectDeleted}
      >
        Show deleted notes
      </button>
      <br/>
      <ul>
        {currentNotes().map((note) => {
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
  )
}

const mapStateToProps = state => ({
  activeNotes: state.notes.activeNotes,
  deletedNotes: state.notes.deletedNotes,
  currentNotes: state.notes.currentNotes
})

const mapDispatchToProps = dispatch => {
  return {
    onDeleteNote: (id) => dispatch({type: actionTypes.DELETE_NOTE, targetId: id}),
    onSelectActive: () => dispatch({type: actionTypes.SELECT_ACTIVE_NOTES}),
    onSelectDeleted: () => dispatch({type: actionTypes.SELECT_DELETED_NOTES})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesDisplay);