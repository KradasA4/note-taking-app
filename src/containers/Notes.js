import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/constants';
import NoteForm from '../components/NoteForm';
import NotesDisplay from '../components/NotesDisplay';

const Notes = (props) => {
  return(
    <div>
      <h1>Note-taking App</h1>
      <NoteForm />
      <hr/>
      <NotesDisplay />
    </div>
  )
}

// const mapStateToProps = state => ({
//     inputTitle: state.inputs.inputTitle,
//     inputContent: state.inputs.inputContent,
//     activeNotes: state.notes.activeNotes,
//     deletedNotes: state.notes.deletedNotes,
//     currentNotes: state.notes.currentNotes
// })

// const mapDispatchToProps = dispatch => {
//   return {
//     onTitleChange: (title) => dispatch({type: actionTypes.TITLE_CHANGE, title: title}),
//     onContentChange: (content) => dispatch({type: actionTypes.CONTENT_CHANGE, content: content}),
//     onAddNote: (title, content, event) => dispatch({type: actionTypes.ADD_NOTE, title: title, content: content, event: event}),
//     onDeleteNote: (id) => dispatch({type: actionTypes.DELETE_NOTE, targetId: id}),
//     onSelectActive: () => dispatch({type: actionTypes.SELECT_ACTIVE_NOTES}),
//     onSelectDeleted: () => dispatch({type: actionTypes.SELECT_DELETED_NOTES})
//   }
// }

export default Notes;