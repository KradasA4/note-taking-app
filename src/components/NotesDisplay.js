import React from 'react'
import './NotesDisplay.css';

function NotesDisplay(props) {

  const currentNotes = () => {
    if(props.currentNotes === 'deletedNotes') {
      return props.deletedNotes;
    } else {
      return props.activeNotes;
    }
  }

  let focusBlueButton;
  let focusRedButton;
  props.currentNotes === 'activeNotes' ? focusBlueButton = 'App__button--focusBlue' : focusBlueButton = ''
  props.currentNotes === 'deletedNotes' ? focusRedButton = 'App__button--focusRed' : focusRedButton = ''
  
  return (
    <div>
      <h2>Notes</h2>        
      <div>
        <button 
          // className="dib bg-lightest-blue ma2 pa2 b--light-blue br3-m"
          className={`App__button App__button--blue ${focusBlueButton}`}
          onClick={props.onSelectActive}
        >
          Show active notes
        </button>
        <button 
        // className="dib bg-light-pink ma pa2 b--pink br3-m"
          className={`App__button App__button--red ${focusRedButton}`}
          onClick={props.onSelectDeleted}
        >
          Show deleted notes
        </button>
      </div>
      <br/>
      <ul className="notes__display">
        {currentNotes().map((note) => {
          return (
            <li className="notes__list">
              <span>Title: {note.title}</span>
              <button
                onClick={() => props.onDeleteNote(note.id)}
                className="App__button--red"
                // className="dib bg-light-pink ma2 pa b--pink br-l"
              >
                X
              </button>
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

// const mapStateToProps = state => ({
//   activeNotes: state.notes.activeNotes,
//   deletedNotes: state.notes.deletedNotes,
//   currentNotes: state.notes.currentNotes
// })

// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteNote: (id) => dispatch({type: actionTypes.DELETE_NOTE, targetId: id}),
//     onSelectActive: () => dispatch({type: actionTypes.SELECT_ACTIVE_NOTES}),
//     onSelectDeleted: () => dispatch({type: actionTypes.SELECT_DELETED_NOTES})
//   }
// }

export default NotesDisplay;